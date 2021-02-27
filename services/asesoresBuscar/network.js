const express = require('express');
const AsesoresBuscarService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');
const decodeToken = require('../../utils/auth/index').decodedToken;

const asesoresBuscarApi = new AsesoresBuscarService();

router.post('/', authMiddleware('update'), async (req, res, next) => {
    const token = req.headers['authorization'];
    const userData = decodeToken(token.replace('Bearer ', '')); 
    
    try {
        asesoresBuscarApi.buscar(userData)
            .then((data) => { 
                response.success(req, res, data)
            })
            .catch((error) => {
                response.error(req, res, error)
            });
    } catch (error) {
        next(error);
    }   
});

module.exports = router;
