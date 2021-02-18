const axiosUtil = require('../../utils/request/axios');
const config = require('../../config');

class SucursalesConsultaService {
    constructor() {
        this.collection = 'sucursales';
    }

    async consulta( object ) {

        return new Promise((resolve, reject) => {

            //get data user from store
            axiosUtil.request(config.urlDao, '/sucursales/buscar', 'post', object,'read', async ( data, error ) => {
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

module.exports = SucursalesConsultaService;