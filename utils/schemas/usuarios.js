const joi = require('@hapi/joi');

const usuarioIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUsuarioSchema = {
    cedula: joi.number().max(9999999999).required(),
    clave: joi.string().max(100).required(),
    nombre: joi.string().max(100).required(),
    apellido: joi.string().max(100).required(),
    estado: joi.number().max(9).required(),
    rol: joi.object().required(),
    perfil: joi.object().required(),
    sucursal: joi.object().required(),
};

const updateUsuarioSchema = {
    cedula: joi.number().max(9999999999).required(),
    clave: joi.string().max(100).required(),
    nombre: joi.string().max(100).required(),
    apellido: joi.string().max(100).required(),
    estado: joi.number().max(9).required(),
    rol: joi.object().required(),
    perfil: joi.object().required(),
    sucursal: joi.object().required(),
};

module.exports = {
    usuarioIdSchema,
    createUsuarioSchema,
    updateUsuarioSchema
}