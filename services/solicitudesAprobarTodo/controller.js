const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config = require('../../config');

class SolicitudesAprobarTodoService {
    constructor() {
        this.collection = 'solicitudes';
    }

    async aprobarTodo(userData) {
        return new Promise((resolve, reject) => {
            const object = {
                "query" : {
                    "sucursal._id" : userData.sucursal._id,                    
                    "estado": 49
                }
            }
            //search approve proposals all
            axiosUtil.request(config.urlDao, '/solicitudes/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAT200-S000020'].status,
                        codigo: exceptions['02PRAT200-S000020'].code,
                        mensaje: exceptions['02PRAT200-S000020'].message
                    });
                } else {
                      //Error al buscar solicitudes de aprobar todas las propuestas 
                      reject({
                        data: {},
                        status: exceptions['02PRAT400-S000021'].status,
                        codigo: exceptions['02PRAT400-S000021'].code,
                        mensaje: exceptions['02PRAT400-S000021'].message
                    });
                }
            });
        });
    }
}

module.exports = SolicitudesAprobarTodoService;