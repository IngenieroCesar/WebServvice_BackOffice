const axiosUtil = require('../../utils/request/axios');
const config = require('../../config');

class EmpleadosRegistroService {
    constructor() {
        this.collection = 'usuarios';
    }

    //Register new user
    async register( object ) {

        return new Promise((resolve, reject) => {

            // get data user from store
            axiosUtil.request(config.urlDao, '/usuarios/registrar', 'post', object, 'write', async ( data, error ) => {
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

module.exports = EmpleadosRegistroService;