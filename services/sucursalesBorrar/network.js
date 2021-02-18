
const express = require('express');
const passport = require('passport');
const SucursalesBorrarService = require('./controller');
const router = express.Router();

const sucursalesBorrarApi = new SucursalesBorrarService();
const { 
    deleteSucursalSchema
} = require('../../utils/schemas/sucursales');
const validationHandler = require('../../utils/middleware/validationHandler');

router.post('/', validationHandler(deleteSucursalSchema), async (req, res, next) => {
    const { body: sucursal } = req;
    let query = {
        "query" : sucursal,
        "fields": [
        ]
    }
    try {
        sucursalesBorrarApi.borrar(query)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log('Imprimimos la respuesta de axios desde network: ', error);
                res.status(error.status).json(error.data);
                // next(error);
            });
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;