
const express = require('express');
const UsuariosBorrarService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const usuariosBorrarApi = new UsuariosBorrarService();
const { 
    deleteUsuarioSchema
} = require('../../utils/schemas/usuarios');
const validationHandler = require('../../utils/middleware/validationHandler');


router.post('/',authMiddleware('update'), validationHandler(deleteUsuarioSchema), async (req, res, next) => {
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