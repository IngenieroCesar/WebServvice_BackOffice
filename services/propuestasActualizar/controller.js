const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class PropuestasActualizarService {
    constructor() {
        this.collection = 'propuestas';
    }

    async actualizar( object ) {
        return new Promise((resolve, reject) => {
            //get data proposals from store
            axiosUtil.request(config.urlDao, '/propuestas/modificar', 'post', object, 'write', async ( data, error ) => {
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

module.exports = PropuestasActualizarService;