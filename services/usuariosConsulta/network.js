
const express = require('express');
const passport = require('passport');
const UsuariosConsultaService = require('./controller');
const router = express.Router();

const usuariosConsultaApi = new UsuariosConsultaService();


router.post('/', async (req, res, next) => {
    const { body: data } = req;
    let query = {
        "query" : data,
        "fields": [
        ]
    }

    try {
        usuariosConsultaApi.consulta(query)
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

/*
Query example:

{
    "query" : {
        "estado": 1
    },
    "fields": [
        "cedula"
    ],
    "limit": 1
}

*/