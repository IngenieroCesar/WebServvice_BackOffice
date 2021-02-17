
const express = require('express');
const passport = require('passport');
const SucursalesConsultaService = require('./controller');
const router = express.Router();

const sucursalesConsultaApi = new SucursalesConsultaService();

router.post('/', async (req, res, next) => {
    const { body: query } = req;
    try {
        sucursalesConsultaApi.consulta(query)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log('Imprimimos la respuesta de axios desde network: ', error);
                res.status(error.status).json(error.data);
                // next(error);
            });
        
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;