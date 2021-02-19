const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class EmpleadosBuscarService {
    constructor() {
        this.collection = 'empleados';
    }

    async buscar( object ) {
        return new Promise((resolve, reject) => {
            //get data employees from store
            axiosUtil.request(config.urlDao, '/empleados/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02EMPBU200-S000010'].status,
                        codigo: exceptions['02EMPBU200-S000010'].code,
                        mensaje: exceptions['02EMPBU200-S000010'].message
                    });
                }  else {
                      //Problema al consultar usuarios
                      reject({
                        data: {},
                        status: exceptions['02EMPBU400-S000011'].status,
                        codigo: exceptions['02EMPBU400-S000011'].code,
                        mensaje: exceptions['02EMPBU400-S000011'].message
                    });
                }
            });
        });
    }

}

module.exports = EmpleadosBuscarService;