const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const { config } = require('../../config');

class PropuestasAprobarTodoService {
    constructor() {
        this.collection = 'propuestas';
    }

    async aprobarTodo( object ) {
        return new Promise((resolve, reject) => {
            //approve proposals all
            axiosUtil.request(config.urlDao, '/propuestas/aprobarTodo', 'post', object, 'write', async ( data, error ) => {
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAT200-S000020'].status,
                        codigo: exceptions['02PRAT200-S000020'].code,
                        mensaje: exceptions['02PRAT200-S000020'].message
                    });
                } else {
                      //Error al aprobar todas las propuestas 
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

module.exports = PropuestasAprobarTodoService;