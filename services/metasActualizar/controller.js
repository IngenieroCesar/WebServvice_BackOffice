const axiosUtil = require('../../utils/request/axios');
const exceptions = require('../../utils/exceptions');
const config = require('../../config');

class MetasActualizarService {
    constructor() {
        this.collection = 'metas';
    }

    async actualizar( object ) {
        return new Promise((resolve, reject) => {
            //get data users from store
            axiosUtil.request(config.urlDao, '/metas/modificar', 'post', object, 'write', async ( data, error ) => {
                console.log(data)
                if (error === null && data) {
                    resolve({
                        data: data.data,
                        status: exceptions['02PRAC200-S000012'].status,
                        codigo: exceptions['02PRAC200-S000012'].code,
                        mensaje: exceptions['02PRAC200-S000012'].message
                    });
                } else {
                    reject({
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

module.exports = MetasActualizarService;