const express = require('express');
const passport = require('passport');
const EmpleadosBuscarService = require('./controller');
const router = express.Router();

const empleadosBuscarApi = new EmpleadosBuscarService();


router.post('/', async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        empleadosBuscarApi.buscar(meta)
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
