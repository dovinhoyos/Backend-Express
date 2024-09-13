const Usuario = require('../models/usuario.model');


const CrearUsuario = async function (UsuarioData) {
    if (!UsuarioData.identificacion || !UsuarioData.nombre || !UsuarioData.apellido || !UsuarioData.email || !UsuarioData.contrasena || !UsuarioData.direccion || !UsuarioData.fecha_nacimiento) {
        throw new Error('Todos los campos son requeridos');
    }

    try {
        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}

const ActualizarUser = async function(idUsuario, NuevoUsuario){
    try{
         
        const usuarioActualizado = await Usuario.editUsuario(idUsuario, NuevoUsuario);

        if (!usuarioActualizado) {
            throw new Error('No se pudo actualizar el usuario, o el usuario no existe.');
        }
        
        return usuarioActualizado;
        
    }catch(error){
        throw error;
    }
}

const ObtenerUsuarios = async () => {
    try {
        const usuarios = await Usuario.findAll(); 
        return usuarios;
    } catch (error) {
        throw error; 
    }
}

const getUserByEmail = async (email) => {
    try {
        
        const [rows] = await Usuario.findUserByEmail(email);
        if (rows.length === 0) {
            throw new Error('Usuario no encontrado');
        }
        return rows[0]; 
    } catch (error) {
        throw error; 
    } 
}


module.exports ={
    CrearUsuario,
    ActualizarUser,
    ObtenerUsuarios,
    getUserByEmail,
}
