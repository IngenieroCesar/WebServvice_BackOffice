const axiosUtil = require('../../utils/request/axios');
const { config } = require('../../config');

class RolesBuscarService {
    constructor() {
        this.collection = 'roles';
    }

    async getRol( object ){

        object = {
            "query" : {
                "estado" : 1
            }
        }

        return new Promise((resolve, reject) => {

            // get data user from store
            axiosUtil.request(config.urlDao, '/roles/buscar', 'post', object, 'read', async ( data, error ) => {
                if (error === null && data) {
                    resolve(data.data[0])
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

module.exports = RolesBuscarService;