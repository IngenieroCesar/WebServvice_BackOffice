const express = require('express');
const passport = require('passport');
// const AsesoresBuscarService = require('./controller');
const router = express.Router();

// const asesoresBuscarApi = new AsesoresBuscarService();


router.post('/', async (req, res, next) => {
    const { body: meta } = req;
    console.log(meta);
    try {
        // asesoresBuscarApi.buscar(meta)
        //     .then((data) => {
        //         res.status(200).json(data);
        //     })
        //     .catch((error) => {
        //         res.status(error.status).json(error.data);
        //     });
        res.status(200);
    } catch (error) {
        next(error);
    }
   
});

module.exports = router;
