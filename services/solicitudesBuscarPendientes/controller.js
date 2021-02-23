const axiosUtil = require('../../utils/request/axios');
const config = require('../../config');

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
                        resolve({ data, error: null })
                    }   else if (error == null) {
                        //algo
                        reject({ data: null, error })
                        }   else {
                            //Not auth
                            reject({ data: null, error })
                            }
                });
            });

    }

}

module.exports = SolicitudesBuscarService;