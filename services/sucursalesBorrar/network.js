
const express = require('express');
const passport = require('passport');
const response = require('../../utils/response');
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
                response.success(req, res, data);
            })
            .catch((error) => {
                response.error(req, res, error);
                // next(error);
            });
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;