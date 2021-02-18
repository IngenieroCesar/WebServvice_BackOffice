
const express = require('express');
const passport = require('passport');
const MetasConsultaService = require('./controller');
const router = express.Router();

const metasConsultaApi = new MetasConsultaService();


router.get('/', async (req, res, next) => {
    const { body: data } = req;
    let query = {
        "query" : {
            "estado": 1
        },
        "fields": [
        ]
    }

    try {
        metasConsultaApi.buscar(query)
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
