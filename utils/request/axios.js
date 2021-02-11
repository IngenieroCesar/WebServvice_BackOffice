//This is a global function to request
const axios = require('axios');
const { config } = require('../../config');
const exceptions = require('../exceptions');

//Authentication betwen services
const authenticationDao = (requestType) => {
  return new Promise((resolve, reject) => {

    let usuario;
    let clave;

    if(requestType === 'write'){
      usuario = config.userwrite;
      clave = config.passwordwrite;
    }else if(requestType === 'read'){
      console.log('Tipo usuario read')
      usuario = config.userread;
      clave = config.passwordread;
    }
  
    axios({
      url: 'http://1ee7de284c6d.ngrok.io/login',
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      data: {
        "usuario" : usuario,
        "clave" : clave
    }
    }).then( (response) => {
      if(requestType === 'write'){
          global.tokenWrite = response.data.token;
          resolve(response.data.token);
      }else if(requestType === 'read'){
          global.tokenRead = response.data.token;
          resolve(response.data.token);
      }
    }).catch( (err) => {
      //Error de conexion con la capa de almacenamiento.
      console.log(err);
      reject(err)
    });
  
  });

}


async function request(url, endPoint, method, data, requestType, callback){
        let token;
        if(requestType === 'write'){
          if(global.tokenWrite){
            console.log('Ya tenemos el token en memoria: ',global.tokenWrite);
            token = global.tokenWrite;
          }else {            
            token = await authenticationDao(requestType);
          }
        }else if(requestType === 'read'){
          if(global.tokenRead){
            console.log('Ya tenemos el token en memoria: ',global.tokenRead);
            token = global.tokenRead;
          }else {
            token = await authenticationDao(requestType);
          }
        }


        axios({
          url: url+endPoint,
          method: method,
          headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token ? token : '',
          },
          data: data
        }).then( (response) => {

            console.log('Data obtenida: ', response.data);
            callback(response.data, null)

        }).catch( async (err) => {
            //Validate if is not authenticate or not conection
            console.log('este es un error: ',err);
            if(err.response.status === 401){
              //call service to login
              console.log('No tenemos el token en memoria.')
              await authenticationDao(requestType);
              //call reRequest
              request(url, endPoint, method, data, requestType, callback)

              console.log(exceptions['EBO002'].message);
              callback(null, err.response);
            }else {
              console.log(exceptions['EBO001'].message);
              err.response.data = { codigo: '01AUT401-S01021', mensaje: 'No autorizado' }
              
              callback(null, err.response);
            }

        });

    }

module.exports = {
    request,

}
  

  