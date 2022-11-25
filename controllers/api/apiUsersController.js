const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { url } = require('inspector');

//CONTROLADOR DE APIS DE USUARIO

const apiUsersController = {
    'lista': async function (req, res) {
        try{
            let usuarios = await db.Usuario.findAll();
          
            usuarios = usuarios.map(usuario => {
                return {
                    id:usuario.id,
                    nombre:usuario.nombre,
                    usuario:usuario.usuario,
                    email:usuario.email,
                    edad:usuario.edad,
                    telefono:usuario.telefono,
                    image:usuario.image
                }
            })

            return res.status(200).json({ 
                total: usuarios.length,
                data : usuarios,
                status:200,
                url:'api/users'
            });
     
            
    } catch (error) {
        console.log(error);
    }
    },
    
    'detalle': async function (req, res) {
        try{
            let usuario = await db.Usuario.findByPk(req.params.id);
     
             let usuario2={
                    nombre:usuario.nombre,
                    usuario:usuario.usuario,
                    email:usuario.email,
                    edad:usuario.edad,
                    telefono:usuario.telefono,
                    image:usuario.image
                    }
            return res.status(200).json({ 
                data : usuario2,
                status:200,
                url:`api/users/${req.params.id}`
            });
     
            
    } catch (error) {
        console.log(error);
    }
    
}
}
     
module.exports = apiUsersController;