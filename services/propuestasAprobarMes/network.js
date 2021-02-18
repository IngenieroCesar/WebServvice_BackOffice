
const express = require('express');
const passport = require('passport');
const PropuestasAprobarMesService = require('./controller');
const router = express.Router();

const propuestasAprobarMesApi = new PropuestasAprobarMesService();


router.post('/', async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        propuestasAprobarMesApi.aprobarMes(meta)
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
