const express = require('express');
const SolicitudesAprobarHoyService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const solicitudesAprobarHoyApi = new SolicitudesAprobarHoyService();


router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: idSucursal } = req;    
    try {
        solicitudesAprobarHoyApi.aprobarHoy(idSucursal)
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
