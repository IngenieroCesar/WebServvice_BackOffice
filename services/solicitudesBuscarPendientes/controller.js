const axiosUtil = require('../../utils/request/axios');
const config = require('../../config');
const exeptions = require('../../utils/exceptions');

class SolicitudesBuscarService {
    constructor() {
        this.collection = 'users';
    }

    async getSolicitudBuscar(  ) {
            return new Promise((resolve, reject) => {
                const object = {
                    "query" : {
                        "fechaRegistro.formato" : {
                            "$gte":"2021-01-28 14:15:00"
                        }
                    }
                }

                // get data user from store
                axiosUtil.request(config.urlDao, '/solicitudes/buscar', 'post', object, 'read', async ( data, error ) => {
                    if (error === null && data) {
                        resolve({
                            data: data,
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
                });
            });
    }
}

module.exports = SolicitudesBuscarService;