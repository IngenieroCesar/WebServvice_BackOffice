const express = require('express');
const AsesoresBuscarService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const asesoresBuscarApi = new AsesoresBuscarService();


router.post('/', authMiddleware('update'), async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        asesoresBuscarApi.buscar(meta)
            .then((data) => { 
                response.success(req, res, data)
            })
            .catch((error) => {     
                console.log(error)
                response.error(req, res, error)
            });
    } catch (error) {
        next(error);
    }   
});

module.exports = router;
