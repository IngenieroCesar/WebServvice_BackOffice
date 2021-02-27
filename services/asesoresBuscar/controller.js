const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config = require('../../config');

class AsesoresBuscarService {
    constructor() {
        this.collection = 'asesores';
    }

    async buscar( userData ) {    
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : userData.sucursal._id, 
                    "rol.rol": "Asesor",
                    "estado": 1
                }
            }
            //get data advisers from store            
            axiosUtil.request(config.urlDao, '/usuarios/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02ASBU200-S00008'].status,
                        codigo: exceptions['02ASBU200-S00008'].code,
                        mensaje: exceptions['02ASBU200-S00008'].message
                    });
                }   else {
                    // Error al consultar los asesores
                    reject({
                        data: {},
                        status: exceptions['02ASBU400-S00009'].status,
                        codigo: exceptions['02ASBU400-S00009'].code,
                        mensaje: exceptions['02ASBU400-S00009'].message
                    });
                }            
            });
        });
    }
}

module.exports = AsesoresBuscarService;