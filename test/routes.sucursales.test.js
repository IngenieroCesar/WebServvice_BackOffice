const assert = require('assert');
const proxyquire = require('proxyquire');

const { sucursalesMock, SucursalesConsultaServiceMock } = require('../utils/mocks/sucursales');
const testServer = require('../utils/testServer');

describe('routes - sucursalesConsulta', function() {
    const route = proxyquire('../services/sucursalesConsulta/network.js', {
        './controller': SucursalesConsultaServiceMock
    });

    const request = testServer(route);

    describe('POST /sucursales/buscar', function() {
        it('Should respond with status 200', function(done){
            request.get('/sucursales/buscar').expect(200, done);
        });
    });
} )