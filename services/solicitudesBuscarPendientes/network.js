const express = require('express');
const solicitudesBuscarService = require('./controller');
const router = express.Router();
const response = require('../../utils/response');
const solicitudesBuscarApi = new solicitudesBuscarService()


router.post('/', async (req, res) => { 
    try {
        solicitudesBuscarApi.getSolicitudBuscar()
            .then((data) => {
                response.success(req, res, data);
            })
            .catch((error) => {
                response.error(req, res, error);                
            });
    } catch (error) {
        next(error);
    }
});

module.exports = router;