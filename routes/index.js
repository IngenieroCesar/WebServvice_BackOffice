const express = require("express");
const { authenticate } = require("passport");
const auth = require('../services/auth/network');
const solicitudesBuscar = require('../services/solicitudesBuscarPendientes/network');
//sucursales
const sucursalesRegistro = require('../services/sucursalesRegistro/network');
const sucursalesActualziar = require('../services/sucursalesActualizar/network');
const sucursalesConsulta = require('../services/sucursalesConsulta/network');
const sucursalesBorrar = require('../services/sucursalesBorrar/network');
//usuarios
const usuariosRegistro = require('../services/usuariosRegistro/network');
const usuariosActualizar = require('../services/usuariosActualizar/network');
const usuariosConsulta = require('../services/usuariosConsulta/network');
const usuariosBorrar = require('../services/usuariosBorrar/network');
//metas
const metasActualizar = require('../services/metasActualizar/network');
const metasBuscar = require('../services/metasBuscar/network');
//propuestas
const propuestasActualizar = require('../services/propuestasActualizar/network');
const solicitudesAprobarMes = require('../services/solicitudesAprobarMes/network');
const solicitudesAprobarHoy = require('../services/solicitudesAprobarHoy/network');
const solicitudesAprobarTodo = require('../services/solicitudesAprobarTodo/network');
const propuestasBuscarPorAsesor = require('../services/propuestasBuscarPorAsesor/network');
//empleados
const empleadosBuscar = require('../services/empleadosBuscar/network');
//asesores
const asesoresBuscar = require('../services/asesoresBuscar/network');


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
  //propuestas
  app.use('/api/propuestas/modificar', propuestasActualizar);
  app.use('/api/solicitudes/aprobarHoy', solicitudesAprobarHoy);
  app.use('/api/solicitudes/aprobarMes', solicitudesAprobarMes);
  app.use('/api/solicitudes/aprobarTodo', solicitudesAprobarTodo);  
  app.use('/api/propuestas/buscarPorAsesor', propuestasBuscarPorAsesor);
  //empleados
  app.use('/api/empleados/buscar', empleadosBuscar);
  //asesores
  app.use('/api/asesores/buscar', asesoresBuscar);
}

module.exports = routes;