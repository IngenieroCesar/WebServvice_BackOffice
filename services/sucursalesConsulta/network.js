
const SucursalesConsultaService = require('./controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const sucursalesConsultaApi = new SucursalesConsultaService();

router.post('/', async (req, res, next) => {
    const { body: query } = req;
    try {
        sucursalesConsultaApi.consulta(query)
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