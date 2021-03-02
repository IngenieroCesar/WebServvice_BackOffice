const SolicitudesActualizarService = require('./controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const solicitudesActualizarApi = new SolicitudesActualizarService();

router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: query } = req;
    try {
       
        solicitudesActualizarApi.actualizar(query)
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
