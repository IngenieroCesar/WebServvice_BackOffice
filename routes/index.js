const auth = require('../services/auth/network');
const solicitudesBuscar = require('../services/solicitudesBuscarPendientes/network');

const sucursalesRegistro = require('../services/sucursalesRegistro/network');
const sucursalesActualziar = require('../services/sucursalesActualizar/network');
const sucursalesConsulta = require('../services/sucursalesConsulta/network');
const sucursalesBorrar = require('../services/sucursalesBorrar/network');

const usuariosRegistro = require('../services/usuariosRegistro/network');
const usuariosActualizar = require('../services/usuariosActualizar/network');
const usuariosConsulta = require('../services/usuariosConsulta/network');
const usuariosBorrar = require('../services/usuariosBorrar/network');

const metasActualizar = require('../services/metasActualizar/network');
const metasBuscar = require('../services/metasBuscar/network');


const routes = function (app){
  //Authentication
  app.use('/api/auth/login', auth);
  //Solicitudes
  app.use('/api/solicitudes/buscar', solicitudesBuscar);
  //Sucursales
  app.use('/api/sucursales/registrar', sucursalesRegistro);
  app.use('/api/sucursales/modificar', sucursalesActualziar);
  app.use('/api/sucursales/buscar', sucursalesConsulta);
  app.use('/api/sucursales/borrar', sucursalesBorrar);
  //usuarios
  app.use('/api/usuarios/registrar', usuariosRegistro);
  app.use('/api/usuarios/modificar', usuariosActualizar);
  app.use('/api/usuarios/buscar', usuariosConsulta);
  app.use('/api/usuarios/borrar', usuariosBorrar);
  //metas
  app.use('/api/metas/modificar', metasActualizar);
  app.use('/api/metas/buscar', metasBuscar);
  
}

module.exports = routes;