const SolicitudesPendientesMesService = require('./controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');
const decodeToken = require('../../utils/auth/index').decodedToken;

const solicitudesPendientesMesApi = new SolicitudesPendientesMesService();

router.post('/',authMiddleware('update'), async (req, res, next) => {
    const token = req.headers['authorization'];
    const userData = decodeToken(token.replace('Bearer ', ''));
    try {
        solicitudesPendientesMesApi.pendientesMes(userData)
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