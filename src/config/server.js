const express = require('express');
const usuarioRoutes = require('../routes/usuario.routes')

const Backend = express();
const port = 3002;
Backend.use(express.json());

Backend.use(usuarioRoutes);


Backend.set('port', process.env.PORT || port );
module.exports = Backend