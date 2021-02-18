const axiosUtil = require('../../utils/request/axios');
const exeptions = require('../../utils/exceptions');
const config = require('../../config');

class UsuariosDeleteService {
    constructor() {
        this.collection = 'usuarios';
    }

    async consulta( usuario ) {
        return new Promise((resolve, reject) => {

            //get data users from store
            axiosUtil.request(config.urlDao, '/usuarios/buscar', 'post', usuario, 'read', async ( data, error ) => {
                if (error === null && data) {
                    data.data[0].estado = 0;
                    resolve(data.data[0])
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
        this.consulta(object)
            .then((response) => {
                //send request to update:
                axiosUtil.request(config.urlDao, '/usuarios/modificar', 'post' , response,'write', async ( data, error ) => {
                    if (error === null && data) {
                        resolve({
                            data: data.data,
                            status: exeptions['02SURO200-S00001'].status,
                            codigo: exeptions['02SURO200-S00001'].code,
                            mensaje: exeptions['02SURO200-S00001'].message
                        })
                    }else {
                        //Problema al consultar usuarios
                        reject({
                            data: {},
                            status: exeptions['02USCO400-S00007'].status,
                            codigo: exeptions['02USCO400-S00007'].code,
                            mensaje: exeptions['02USCO400-S00007'].message
                        });
                    }
                });

            })
            .catch((error) => {
                reject(error);
            });
        });

    }

}

module.exports = UsuariosDeleteService;