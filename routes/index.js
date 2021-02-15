const express = require("express");
const { authenticate } = require("passport");
const signIn = require('../services/signIn/network');
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
  app.use('/auth/sign-in', signIn);
  //Solicitudes
  app.use('/solicitudes/buscar', solicitudesBuscar);
  //Sucursales
  app.use('/sucursales/registrar', sucursalesRegistro);
  app.use('/sucursales/modificar', sucursalesActualziar);
  app.use('/sucursales/buscar', sucursalesConsulta);
  app.use('/sucursales/borrar', sucursalesBorrar);
  //usuarios
  app.use('/usuarios/registrar', usuariosRegistro);
  app.use('/usuarios/modificar', usuariosActualizar);
  app.use('/usuarios/buscar', usuariosConsulta);
  app.use('/usuarios/borrar', usuariosBorrar);
  //metas
  app.use('/metas/modificar', metasActualizar);
  app.use('/metas/buscar', metasBuscar);
  
}

module.exports = routes;