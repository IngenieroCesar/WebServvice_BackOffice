
const express = require('express');
const passport = require('passport');
const SucursalesRegistroService = require('./controller');
const router = express.Router();

const sucursalesRegistroApi = new SucursalesRegistroService();
const { 
    sucursalIdSchema,
    createSucursalSchema,
    updateSucursalSchema
} = require('../../utils/schemas/sucursales');
const validationHandler = require('../../utils/middleware/validationHandler');


router.post('/', validationHandler(createSucursalSchema), async (req, res, next) => {
    const { body: sucursal } = req;
    try {
        sucursalesRegistroApi.register(sucursal)
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