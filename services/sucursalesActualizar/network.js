
const express = require('express');
const passport = require('passport');
const SucursalesActualizarService = require('./controller');
const router = express.Router();

const sucursalesActualizarApi = new SucursalesActualizarService();
const { 
    updateSucursalSchema
} = require('../../utils/schemas/sucursales');
const validationHandler = require('../../utils/middleware/validationHandler');


//JWT strategy
require('../../utils/auth/strategies/jwt');

router.post('/',validationHandler(updateSucursalSchema) , async (req, res, next) => {
    const { body: sucursal } = req;
    try {
        sucursalesActualizarApi.actualizar(sucursal)
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