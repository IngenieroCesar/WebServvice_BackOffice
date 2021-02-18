const axiosUtil = require('../../utils/request/axios');
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
                    resolve({
                        data: data.data,
                        status: exeptions['02SURO200-S00001'].status,
                        codigo: exeptions['02SURO200-S00001'].code,
                        mensaje: exeptions['02SURO200-S00001'].message
                    });
                }else {
                    //Problema al consultar usuarios
                    reject({
                        data: {},
                        status: exeptions['02USCO400-S00006'].status,
                        codigo: exeptions['02USCO400-S00006'].code,
                        mensaje: exeptions['02USCO400-S00006'].message
                    });
                }
            });
        });

    }

}

module.exports = UsuariosConsultaService;