const express = require('express');
const PropuestaBuscarPorAsesorService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const PropuestaBuscarPorAsesorApi = new PropuestaBuscarPorAsesorService();


router.post('/', authMiddleware('update'), async (req, res, next) => {
    const { body: data } = req;

    try {
        PropuestaBuscarPorAsesorApi.consulta(query)
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