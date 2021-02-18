
const express = require('express');
const router = express.Router();
const response = require('../../utils/response');

const UsuariosConsultaService = require('./controller');

const usuariosConsultaApi = new UsuariosConsultaService();

const config = require('../../config');


router.post('/', async (req, res, next) => {

    const { body: user } = req;
    let query = {
        "query" : user,
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