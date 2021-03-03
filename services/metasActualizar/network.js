const express = require('express');
const MetasActualizarService = require('./controller');
const authMiddleware = require('../../utils/middleware/authentication');
const router = express.Router();

const metasActualizarApi = new MetasActualizarService();


router.post('/', authMiddleware('update'), async (req, res, next) => {
    const { body: meta } = req;    
    try {
        metasActualizarApi.actualizar(meta)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                res.status(error.status).json(error.data);
            });
    } catch (error) {
        next(error);
    }
   
});

module.exports = router;
