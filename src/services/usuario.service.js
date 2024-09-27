const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const CrearUsuario = async function (UsuarioData) {
    
    try {
        
        if (!UsuarioData) {
            throw new Error('Todos los campos son requeridos');
        }
        const password = UsuarioData.contrasena;
        if(!password){
            throw new error;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        UsuarioData.contrasena = hashedPassword;

        const usuarioCreado = await Usuario.create(UsuarioData);
        return usuarioCreado;
    } catch (error) {
        throw error;
    }
}

const LoginUser = async(email, contrasena) => {
    try {
        
        const [users] = await Usuario.findUserByEmail(email);
    
        if(users.length === 0){
            throw new Error('Usuario no encontrado.');
        }
    
        const user = users[0];
    
        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
        if(!isPasswordValid){
            throw new Error('Contraseña incorrecta.');
        }
        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                identificacion: user.identificacion,
            },
            secretKey, // Clave secreta
            { expiresIn: '30m' }
    
        );
        return { token };
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
    LoginUser
}
