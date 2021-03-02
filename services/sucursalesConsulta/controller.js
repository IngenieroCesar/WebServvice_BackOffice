const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config = require('../../config');


class SucursalesConsultaService {
    constructor() {
        this.collection = 'sucursales';
    }

    async consulta( query ) {

        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "_id" : query._id,                  
                    "_rev": query._rev
                }
            }
            //get data user from store
            axiosUtil.request(config.urlDao, '/sucursales/buscar', 'post', object,'read', async ( data, error ) => {
              if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02SUCBU200-S000022'].status,
                        codigo: exceptions['02SUCBU200-S000022'].code,
                        mensaje: exceptions['02SUCBU200-S000022'].message
                    });
                }  else {
                      //Problema al consultar empleados
                      reject({
                        data: {},
                        status: exceptions['02SUCBU400-S000023'].status,
                        codigo: exceptions['02SUCBU400-S000023'].code,
                        mensaje: exceptions['02SUCBU400-S000023'].message
                    });
                }
            });
        });

    }

}

module.exports = SucursalesConsultaService;