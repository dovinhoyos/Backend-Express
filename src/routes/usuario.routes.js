
const express = require('express');
const router = express.Router();
const {
    CrearUserC, ActualizarUserC, ObtenerUsuariosC, GetUserByEmailC, LoginUserC
} = require('../controllers/usuario.controller')


router.post('/crearUser', CrearUserC);
router.put('/actualizarUsers/:id', ActualizarUserC);
router.get('/obtenerUsuarios', ObtenerUsuariosC);
router.get('/obtenerUsuarioPorEmail/:email', GetUserByEmailC);
router.post('/login', LoginUserC);

module.exports = router