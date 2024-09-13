
const express = require('express');
const router = express.Router();
const {
    CrearUserC, ActualizarUserC, ObtenerUsuariosC, GetUserByEmailC
} = require('../controllers/usuario.controller')


router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);
router.get('/obtenerUsuarios', ObtenerUsuariosC);
router.get('/obtenerUsuarioPorEmail/:email', GetUserByEmailC);

module.exports = router