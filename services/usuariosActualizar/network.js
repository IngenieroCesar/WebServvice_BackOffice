
const express = require('express');
const passport = require('passport');
const UsuariosActualizarService = require('./controller');
const router = express.Router();

const usuariosActualizarApi = new UsuariosActualizarService();
const { 
    updateUsuarioSchema
} = require('../../utils/schemas/usuarios');
const validationHandler = require('../../utils/middleware/validationHandler');

//JWT strategy
require('../../utils/auth/strategies/jwt');

router.post('/', validationHandler(updateUsuarioSchema), async (req, res, next) => {
    const { body: usuario } = req;
    try {
        //Actualizar al usuario.
        usuariosActualizarApi.register(usuario)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log('Imprimimos la respuesta de axios desde network: ', error);
                res.status(error.status).json(error.data);
                // next(error);
            });

        res.status(200).json(data);
    } catch (error) {
        next(error);
    }
   

});

module.exports = router;