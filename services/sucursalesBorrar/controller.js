const axiosUtil = require('../../utils/request/axios');
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
                    data.data.estado = 0;
                    resolve(data.data)
                }   else if (error == null) {
                    //algo
                    reject(error)
                    }   else {
                        //Not auth
                        reject(error)
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
                            resolve(data)
                        }   else if (error == null) {
                            //algo
                            reject(error)
                            }   else {
                                //Not auth
                                reject(error)
                                }
                    });
                })
                .catch((error) => {
                    reject(error);
                });


            //get data user from store

        });

    }

}

module.exports = SucursalesBorrarService;