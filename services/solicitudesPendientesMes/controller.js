const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config = require('../../config');
const moment = require('moment');

class SolicitudesPendientesMesService {
    constructor() {
        this.collection = 'solicitudes';
    }

    async pendientesMes(userData) {
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : userData.sucursal._id,
                    "createdAt" : {
                        "$gte": moment().startOf('month'),
                        "$lte": moment().endOf('month')
                    },
                    "estado": 49
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
                        status: exceptions['02PRAM400-S000017'].status,
                        codigo: exceptions['02PRAM400-S000017'].code,
                        mensaje: exceptions['02PRAM400-S000017'].message
                    });                        
                }
            });
        });

    }

}

module.exports = SolicitudesPendientesMesService;