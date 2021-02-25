const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config  = require('../../config');
const moment = require('moment');

class SolicitudesAprobarHoyService {
    constructor() {
        this.collection = 'solicitudes';
    }

    async aprobarHoy(userData) {
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : userData.sucursal._id,
                    "createdAt" : {
                        "$gte": moment().startOf('day'),  
                        "$lte": moment().endOf('day'),
                    },
                    "estado": 49
                }
            }
            //Buscar propuestas aprobadas de hoy.
            axiosUtil.request(config.urlDao, '/solicitudes/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    console.log(data);
                    resolve({
                        data: data,
                        status: exceptions['02PRAH200-S000014'].status,
                        codigo: exceptions['02PRAH200-S000014'].code,
                        mensaje: exceptions['02PRAH200-S000014'].message
                    });
                } else {
                      //Error al buscar propuestas aprobadas de hoy
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

module.exports = SolicitudesAprobarHoyService;