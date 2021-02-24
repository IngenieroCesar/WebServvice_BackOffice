
const express = require('express');
const passport = require('passport');
const SolicitudesAprobarMesService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');


const solicitudesAprobarMesApi = new SolicitudesAprobarMesService();


router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: idSucursal } = req;    
    console.log(meta);
    try {
        solicitudesAprobarMesApi.aprobarMes(idSucursal)
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
