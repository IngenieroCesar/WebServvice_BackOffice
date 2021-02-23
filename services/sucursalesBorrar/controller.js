const axiosUtil = require('../../utils/request/axios');
const exeptions = require('../../utils/exceptions');
const config = require('../../config');

class SucursalesBorrarService {
    constructor() {
        this.collection = 'sucursales';
    }

    async consulta( sucursal ) {

        return new Promise((resolve, reject) => {

            //get data user from store
            axiosUtil.request(config.urlDao, '/sucursales/buscar', 'post', sucursal,'read', async ( data, error ) => {
                if (error === null && data) {
                    console.log('data cosnulta',data)
                    data.data.estado = 0;
                    resolve(data.data);
                }else {
                    reject({
                        data: {error: error},
                        status: exeptions['02SURO401-S00003'].status,
                        codigo: exeptions['02SURO401-S00003'].code,
                        mensaje: exeptions['02SURO401-S00003'].message
                    });
                }
            });
        });

    }

    async borrar( object ) {

        return new Promise((resolve, reject) => {
            this.consulta( object )
                .then((response) => {
                    console.log(response);
                    // resolve (response);
                    axiosUtil.request(config.urlDao, '/sucursales/modificar', 'post' , response, 'write', async ( data, error ) => {
                        if (error === null && data) {
                            resolve({
                                data: data.data,
                                status: exeptions['02SURO200-S00002'].status,
                                codigo: exeptions['02SURO200-S00002'].code,
                                mensaje: exeptions['02SURO200-S00002'].message
                            });
                        }   else{
                            reject({
                                data: {},
                                status: exeptions['02SURO400-S00006'].status,
                                codigo: exeptions['02SURO400-S00006'].code,
                                mensaje: exeptions['02SURO400-S00006'].message
                            });
                                }
                    });
                })
                .catch((error) => {
                    reject({
                        data: {},
                        status: exeptions['02SURO401-S00003'].status,
                        codigo: exeptions['02SURO401-S00003'].code,
                        mensaje: exeptions['02SURO401-S00003'].message
                    });
                });


            //get data user from store

        });

    }

}

module.exports = SucursalesBorrarService;