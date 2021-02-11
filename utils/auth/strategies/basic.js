const passport = require('passport');
const { BasicStrategy } = require('passport-http');

const UsuariosConsultaService = require('../../../services/usuariosConsulta/controller');
const usuariosConsultaApi = new UsuariosConsultaService();

passport.use(new BasicStrategy(async function (cedula, clave, cb) {

    //Convert string to int
    cedula = parseInt(cedula, 10);

    try {
        let query = {
            "query" : {
                "cedula": cedula,
                "clave": clave
            },
            "fields": [
            ],
            "limit": 1
        }
        //Validation authentication user
        const user = await usuariosConsultaApi.consulta(query);
        //Controlar el no autenticado.
        console.log('Este es el resultado user: ',user.data[0]);
        return cb(null, user.data[0]);

    } catch (error) {
        //console.log('Este es el resultado: ',error);
        return cb(error, null);
    }
}))