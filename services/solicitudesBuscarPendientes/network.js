
const express = require('express');
const passport = require('passport');
const solicitudesBuscarService = require('./controller');
const router = express.Router();

const solicitudesBuscarApi = new solicitudesBuscarService()

//JWT strategy
require('../../utils/auth/strategies/jwt');

router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => { 

    // const solicitudBuscar = await solicitudesBuscarApi.getSolicitudBuscar();
    const solicitudBuscar = { data: 'hola'};
    console.log(solicitudBuscar)
    res.status(200).json(solicitudBuscar.data);


});

module.exports = router;