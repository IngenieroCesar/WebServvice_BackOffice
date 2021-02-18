const { response } = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const exception = require('../exceptions');

const secret = config.jwt.secret;


function sign(data) {
    return jwt.sign(data, secret, { expiresIn: '2m' });
}


function getToken(auth) {
    if(!auth){
        throw new Error('No viene token');
    }

    if(auth.indexOf('Bearer ') === -1){
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');
    
    return token;
}

async function check(req){

    return new Promise((resolve, reject) => {
        const authorization = req.headers.authorization || '';
        const token = getToken(authorization);
        jwt.verify(token, secret, (err, user) => {
            // if there has been an error
            if (err) {

                reject({
                    data: {err: err},
                    status: exception['02SURO401-S00005'].status,
                    codigo: exception['02SURO401-S00005'].code,
                    mensaje: exception['02SURO401-S00005'].message
                });  
            }
            //JWT valido
            resolve({
                data: { user: user},
                status: exception['02SURO200-S00004'].status,
                codigo: exception['02SURO200-S00004'].code,
                mensaje: exception['02SURO200-S00004'].message
            });  
          });
    });


}

module.exports = {
    sign,
    check,
}