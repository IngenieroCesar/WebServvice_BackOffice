
const express = require('express');
const UsuariosConsultaService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const usuariosConsultaApi = new UsuariosConsultaService();


router.post('/', authMiddleware('update'), async (req, res, next) => {
    const { body: data } = req;
    let query = {
        "query" : data,
        "fields": [
        ]
    }

    try {
        usuariosConsultaApi.consulta(query)
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
