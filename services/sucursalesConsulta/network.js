
const express = require('express');
const passport = require('passport');
const response = require('../../utils/response');
const SucursalesConsultaService = require('./controller');
const router = express.Router();

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
                // next(error);
            });
        
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;