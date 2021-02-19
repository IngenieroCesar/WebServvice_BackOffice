const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class PropuestasAprobarHoyService {
    constructor() {
        this.collection = 'propuestas';
    }

    async aprobarHoy( object ) {
        return new Promise((resolve, reject) => {
            //approve proposals today
            axiosUtil.request(config.urlDao, '/propuestas/aprobarHoy', 'post', object, 'write', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAH200-S000014'].status,
                        codigo: exceptions['02PRAH200-S000014'].code,
                        mensaje: exceptions['02PRAH200-S000014'].message
                    });
                } else {
                      //Error al aprobar propuestas de hoy
                      reject({
                        data: {},
                        status: exceptions['02PRAH400-S000015'].status,
                        codigo: exceptions['02PRAH400-S000015'].code,
                        mensaje: exceptions['02PRAH400-S000015'].message
                    });
                }
            });
        });

    }

}

module.exports = PropuestasAprobarHoyService;