const {CrearUsuario, ActualizarUser, ObtenerUsuarios, getUserByEmail} = require('../services/usuario.service')

const controller = {};

controller.CrearUserC = async function (req, res) {
    try {
        const usuarioData = req.body;

        if (!usuarioData.identificacion || !usuarioData.nombre || !usuarioData.apellido || !usuarioData.email || !usuarioData.contrasena || !usuarioData.direccion || !usuarioData.fecha_nacimiento) {
            return res.status(400).json({ error: 'Todos los campos son requeridos' });
        }

        const user = await CrearUsuario(usuarioData);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

controller.ActualizarUserC = async function (req, res) {
    try{
        const usuarioDatos = req.body;
        const idUsuario = req.params.id;

       


        // Llamar al servicio para actualizar el usuario
        const user = await ActualizarUser(idUsuario, usuarioDatos)

        // Enviar la respuesta
        return res.status(201).json(user);
    }catch(error){
        res.status(500).json({error: error.message})

    }
    
}

controller.ObtenerUsuariosC = async (req, res) => {
    try {
        const usuarios = await ObtenerUsuarios(); 
        if (usuarios.length === 0) {
            return res.status(404).json({ message: 'No se encontraron usuarios' });
        }

        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

controller.GetUserByEmailC = async (req, res) => {

    const { email } = req.params;

    try {
        const usuario = await getUserByEmail(email);
        res.status(200).json(usuario);
    } catch (error) {
        if (error.message === 'Usuario no encontrado') {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        res.status(500).json({ error: error.message });
    }
}

module.exports = controller;
