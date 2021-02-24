const joi = require('@hapi/joi');

const updatePropuestasSchema = {
    _id: joi.string().regex(/^[0-9a-zA-Z]{32}$/).required(),
    estado: joi.number().max(9).required(),    
    usuarioRegistra: joi.object()

};


module.exports = { updatePropuestasSchema }