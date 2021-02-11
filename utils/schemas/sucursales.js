const joi = require('@hapi/joi');

//PARA LAS ACTUALIZACIÓNES DEBO USAR EL REF QUE GENERA COUCH. CAMBIA EL NUMERO AL OBJECTiD
const sucursalIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/).required();

const createSucursalSchema = {
    nombre: joi.string().max(100).required(),
    direccion: joi.string().max(100).required(),
    telefono: joi.number().max(9999999999).required(),
    estado: joi.number().max(9).required(),
    usuarioRegistra: joi.object().required()

};

const updateSucursalSchema = {
    _id: joi.string().regex(/^[0-9a-fA-F]{32}$/).required(),
    _rev: joi.string().regex(/^[0-9a-fA-F]+-[0-9a-fA-F]{32}$/).required(),
    nombre: joi.string().max(100),
    direccion: joi.string().max(100),
    telefono: joi.number().max(9999999999),
    estado: joi.number().max(9),
    usuarioRegistra: joi.object()

};

const deleteSucursalSchema = {
    _id: joi.string().regex(/^[0-9a-fA-F]{32}$/).required(),
    _rev: joi.string().regex(/^[0-9a-fA-F]+-[0-9a-fA-F]{32}$/).required(),
};

module.exports = {
    sucursalIdSchema,
    createSucursalSchema,
    updateSucursalSchema,
    deleteSucursalSchema
}