
const express = require('express');
const passport = require('passport');
const MetasActualizarService = require('./controller');
const router = express.Router();

const metasActualizarApi = new MetasActualizarService();

//JWT strategy
require('../../utils/auth/strategies/jwt');

router.post('/', async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
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
