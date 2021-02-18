const axiosUtil = require('../../utils/request/axios');
const auth = require('../../utils/auth');
const exeptions = require('../../utils/exceptions');
const config = require('../../config');

class UsuariosConsultaService {
    constructor() {
        this.collection = 'sucursales';
    }

    async consulta( object ) {
        return new Promise((resolve, reject) => {

            //get data users from store
            axiosUtil.request(config.urlDao, '/usuarios/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    if(data.data[0]){
                        //El usuario existe en base de datos y devemos retornar el token
                        let token = await auth.sign(data.data[0]);
                        resolve({
                            data: { token: token },
                            status: exeptions['02SURO200-S00002'].status,
                            codigo: exeptions['02SURO200-S00002'].code,
                            mensaje: exeptions['02SURO200-S00002'].message
                        });
                    }else {
                        //El usuario no esta autorizado
                        reject({
                            data: {},
                            status: exeptions['02SURO401-S00003'].status,
                            codigo: exeptions['02SURO401-S00003'].code,
                            mensaje: exeptions['02SURO401-S00003'].message
                        });
                    }
                    
                } else {
                    console.log(error);
                    //Not auth
                    reject({
                        data: error,
                        status: exeptions['02SURO401-S00003'].status,
                        codigo: exeptions['02SURO401-S00003'].code,
                        mensaje: exeptions['02SURO401-S00003'].message
                    });
                    }
            });
        });

    }

}

module.exports = UsuariosConsultaService;