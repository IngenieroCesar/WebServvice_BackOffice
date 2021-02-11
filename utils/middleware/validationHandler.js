const boom = require('@hapi/boom')
const joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = joi.validate(data, schema);
    return error;
}

function validationHandler(schema, check = "body") {
    return function (req, res, next) {
        const error = validate(req[check], schema);
        // console.log('error desde schema: ',error.details);
        error ? next( boom.badRequest(error) ) : next(); 
    }
}

module.exports = validationHandler;

//02SU400-S0001: SERIA PARA TODA LA FUNCION QUE VALIDA EL OBJETO.
