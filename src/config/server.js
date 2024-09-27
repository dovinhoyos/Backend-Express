require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usuarioRoutes = require('../routes/usuario.routes')

const Backend = express();
const port = 3002;

const corsOptions = {
    origin: 'http://localhost:4200', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};

Backend.use(cors(corsOptions));
Backend.use(bodyParser.json());
Backend.use(usuarioRoutes);


Backend.set('port', process.env.PORT || port );
module.exports = Backend