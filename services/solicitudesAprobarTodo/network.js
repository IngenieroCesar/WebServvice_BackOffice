const express = require('express');
const SolicitudesAprobarTodoService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');
const solicitudesAprobarTodoApi = new SolicitudesAprobarTodoService();


router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: idSucursal } = req;    
    try {
        solicitudesAprobarTodoApi.aprobarTodo(idSucursal)
        .then((data) => { 
            response.success(req, res, data)
        })
        .catch((error) => {
            response.error(req, res, error)
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;