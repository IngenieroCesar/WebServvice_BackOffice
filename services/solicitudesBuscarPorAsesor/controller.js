const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config  = require('../../config');

class SolicitudesBuscarPorAsesorService {
    constructor() {
        this.collection = 'solicitudes';
    }

    async buscarPorAsesor( userData ) {         
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "usuarioRegistra._id" : userData._id                    
                }
            }
            //get data proposals by advicers from store
            axiosUtil.request(config.urlDao, '/solicitudes/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRBA200-S000018'].status,
                        codigo: exceptions['02PRBA200-S000018'].code,
                        mensaje: exceptions['02PRBA200-S000018'].message
                    });
                }else {
                    //Problema al consultar usuarios
                    reject({
                        data: {},
                        status: exceptions['02PRBA400-S000019'].status,
                        codigo: exceptions['02PRBA400-S000019'].code,
                        mensaje: exceptions['02PRBA400-S000019'].message
                    });
                }
            });
        });
    }

}

module.exports = SolicitudesBuscarPorAsesorService;