
const express = require('express');
const passport = require('passport');
const solicitudesBuscarService = require('./controller');
const router = express.Router();

const solicitudesBuscarApi = new solicitudesBuscarService()


router.post('/', async (req, res) => { 

    const solicitudBuscar = await solicitudesBuscarApi.getSolicitudBuscar();
    console.log(solicitudBuscar)
    res.status(200).json(solicitudBuscar.data);


});

module.exports = router;