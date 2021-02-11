const sucursalesMock = [

    {
        "nombre" : "Sucursal",
        "direccion" : "Cll 141 13 36 ap 3151",
        "telefono" : 3186132665,
        "estado" : 1,
        "usuarioRegistra" : {
            "_id": "7075c534910e98ecef8bf1403a0095f4"
        }
    },

    {
        "nombre" : "Sucursal2",
        "direccion" : "Cll 142 13 36 ap 3151",
        "telefono" : 3186132666,
        "estado" : 1,
        "usuarioRegistra" : {
            "_id": "7075c534910e98ecef8bf1403a0095f4"
        }
    },

    {
        "nombre" : "Sucursal3",
        "direccion" : "Cll 143 13 36 ap 3151",
        "telefono" : 3186132666,
        "estado" : 1,
        "usuarioRegistra" : {
            "_id": "7075c534910e98ecef8bf1403a0095f4"
        }
    },

    {
        "nombre" : "Sucursal4",
        "direccion" : "Cll 144 13 36 ap 3151",
        "telefono" : 3186132666,
        "estado" : 1,
        "usuarioRegistra" : {
            "_id": "7075c534910e98ecef8bf1403a0095f4"
        }
    },

    {
        "nombre" : "Sucursal5",
        "direccion" : "Cll 145 13 36 ap 3151",
        "telefono" : 3186132666,
        "estado" : 1,
        "usuarioRegistra" : {
            "_id": "7075c534910e98ecef8bf1403a0095f4"
        }
    },

];

//Utilidad 
function filterSucursalesMock(nombre){
    return sucursalesMock.filter(sucursal => sucursal.nombre.includes(nombre));
}

class SucursalesConsultaServiceMock {
    async consulta () {
        return Promise.resolve(sucursalesMock);
    }
}
  
module.exports = {
    sucursalesMock,
    filterSucursalesMock,
    SucursalesConsultaServiceMock
  };