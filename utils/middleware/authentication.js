const auth = require('../auth');
const response = require('../../utils/response');

module.exports = function checkAuth(action) {


    async function middleware(req, res, next){
        switch(action) {
            case 'update':
                await auth.check(req)
                        .then(response => {
                            //Token valido.
                            next();
                        })
                        .catch(error => {
                            response.error(req, res, error)
                        });

                
                break;
            default:
                netx();
        }
    }

    return middleware;
}