
const express = require('express');
const passport = require('passport');
const PropuestasAprobarMesService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');


const propuestasAprobarMesApi = new PropuestasAprobarMesService();


router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        propuestasAprobarMesApi.aprobarMes(meta)
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
