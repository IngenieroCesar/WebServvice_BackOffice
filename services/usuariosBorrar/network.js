
const express = require('express');
const passport = require('passport');
const UsuariosBorrarService = require('./controller');
const router = express.Router();

const usuariosBorrarApi = new UsuariosBorrarService();
const { 
    deleteUsuarioSchema
} = require('../../utils/schemas/usuarios');
const validationHandler = require('../../utils/middleware/validationHandler');


router.post('/', validationHandler(deleteUsuarioSchema), async (req, res, next) => {
    const { body: usuario } = req;

    let query = {
        "query" : usuario,
        "fields": [
        ]
    }

    try {
        //Borrar al usuario.
        usuariosBorrarApi.borrar(query)
            .then((data) => {
                res.status(200).json(data);
            })
            .catch((error) => {
                console.log(error)
                res.status(error.status).json(error.data);
                // next(error);
            });

    } catch (error) {
        next(error);
    }
   

});

module.exports = router;