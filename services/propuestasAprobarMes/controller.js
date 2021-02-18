const axiosUtil = require('../../utils/request/axios');
const { config } = require('../../config');

class PropuestasAprobarMesService {
    constructor() {
        this.collection = 'propuestas';
    }

    async aprobarMes( object ) {

        return new Promise((resolve, reject) => {

            //get data users from store
            axiosUtil.request(config.urlDao, '/propuestas/aprobarMes', 'post', object, 'write', async ( data, error ) => {
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

module.exports = PropuestasAprobarMesService;