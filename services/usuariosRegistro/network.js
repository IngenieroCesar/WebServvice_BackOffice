
const express = require('express');
const passport = require('passport');
const UsuariosRegistroService = require('./controller');
const router = express.Router();

const usuariosRegistroApi = new UsuariosRegistroService();
const { 
    usuarioIdSchema,
    createUsuarioSchema,
    updateUsuarioSchema
} = require('../../utils/schemas/usuarios');
const validationHandler = require('../../utils/middleware/validationHandler');


router.post('/', validationHandler(createUsuarioSchema), async (req, res, next) => {
    const { body: usuario } = req;
    try {

        //Registramos al usuario.
        usuariosRegistroApi.register(usuario)
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
