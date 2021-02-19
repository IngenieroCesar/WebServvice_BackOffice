const express = require('express');
const PropuestasAprobarTodoService = require('./controller');
const router = express.Router();
const authMiddleware = require('../../utils/middleware/authentication');
const response = require('../../utils/response');

const propuestasAprobarTodoApi = new PropuestasAprobarTodoService();


router.post('/',authMiddleware('update'), async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        propuestasAprobarTodoApi.aprobarTodo(meta)
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
