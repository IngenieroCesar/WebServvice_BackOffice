const axiosUtil = require('../../utils/request/axios');
const { config } = require('../../config');

class EmpleadosBuscarService {
    constructor() {
        this.collection = 'empleados';
    }

    async buscar( object ) {

        return new Promise((resolve, reject) => {

            //get data users from store
            axiosUtil.request(config.urlDao, '/empleados/buscar', 'post', object, 'write', async ( data, error ) => {
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

module.exports = EmpleadosBuscarService;