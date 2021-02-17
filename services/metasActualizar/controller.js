const axiosUtil = require('../../utils/request/axios');
const config = require('../../config');

class MetasActualizarService {
    constructor() {
        this.collection = 'metas';
    }

    async actualizar( object ) {

        return new Promise((resolve, reject) => {

            //get data users from store
            axiosUtil.request(config.urlDao, '/metas/modificar', 'post', object, 'write', async ( data, error ) => {
                if (error === null && data) {
                    resolve(data)
                }   else if (error == null) {
                    //algo
                    reject(error)
                    }   else {
                        //Not auth
                        reject(error)
                        }
            });
        });

    }

}

module.exports = MetasActualizarService;