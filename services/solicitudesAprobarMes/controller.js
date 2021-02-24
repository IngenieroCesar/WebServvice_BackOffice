const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class SolicitudesAprobarMesService {
    constructor() {
        this.collection = 'solicitudes';
    }

    async aprobarMes( idSucursal ) {
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : idSucursal
                }
            }
            //Buscar solicitudes de propuestas aprobadas por mes
            axiosUtil.request(config.urlDao, '/solicitudes/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data,
                        status: exceptions['02PRAM200-S000016'].status,
                        codigo: exceptions['02PRAM200-S000016'].code,
                        mensaje: exceptions['02PRAM200-S000016'].message
                    });
                } else {
                     //Error al buscar  propuestas aprobadas del mes
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

module.exports = SolicitudesAprobarMesService;