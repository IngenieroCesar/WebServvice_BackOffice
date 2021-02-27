const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config  = require('../../config');

class SolicitudesActualizarService {
    constructor() {
        this.collection = 'propuestas';
    }

    async actualizar(dataUser) {
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : userData.sucursal._id,                    
                    "estado": 49
                }
            }
            //get data proposals from store
            axiosUtil.request(config.urlDao, '/solicitudes/modificar', 'post', object, 'write', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAC200-S000012'].status,
                        codigo: exceptions['02PRAC200-S000012'].code,
                        mensaje: exceptions['02PRAC200-S000012'].message
                    });
                } else {
                    exceptionsreject({
                        data: {},
                        status: exceptions['02PRAC400-S000013'].status,
                        codigo: exceptions['02PRAC400-S000013'].code,
                        mensaje: exceptions['02PRAC400-S000013'].message
                    });                    
                }
            });
        });
    }

}

module.exports = SolicitudesActualizarService;