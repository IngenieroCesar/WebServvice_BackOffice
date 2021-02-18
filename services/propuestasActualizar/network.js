
const express = require('express');
const passport = require('passport');
const PropuestasActualizarService = require('./controller');
const router = express.Router();

const propuestasActualizarApi = new PropuestasActualizarService();

//JWT strategy
require('../../utils/auth/strategies/jwt');

router.post('/', async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        propuestasActualizarApi.actualizar(meta)
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
