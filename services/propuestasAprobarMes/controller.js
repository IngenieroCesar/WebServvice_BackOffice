const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class PropuestasAprobarMesService {
    constructor() {
        this.collection = 'propuestas';
    }

    async aprobarMes( object ) {

        return new Promise((resolve, reject) => {

            //approve purposals by month 
            axiosUtil.request(config.urlDao, '/propuestas/aprobarMes', 'post', object, 'write', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAM200-S000016'].status,
                        codigo: exceptions['02PRAM200-S000016'].code,
                        mensaje: exceptions['02PRAM200-S000016'].message
                    });
                } else {
                     //Error al aprobar propuestas del mes
                     reject({
                        data: {},
                        status: exeptions['02PRAM400-S000017'].status,
                        codigo: exeptions['02PRAM400-S000017'].code,
                        mensaje: exeptions['02PRAM400-S000017'].message
                    });                        
                }
            });
        });

    }

}

module.exports = PropuestasAprobarMesService;