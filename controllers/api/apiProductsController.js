const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');
const { url } = require('inspector');

//CONTROLADOR DE APIS DE PRODUCTO

const apiProductsController = {
    'lista': async function (req, res) {
        try{
            let productos = await db.Producto.findAll();
            let categorias = await db.Categoria.findAll();
    
            let velas = await db.Producto.findAll({
                where:{categoriaId:1}
            })
            let velones = await db.Producto.findAll({
                where:{categoriaId:2}
            })
            let accesorios = await db.Producto.findAll({
                where:{categoriaId:3}
            })
            let otra = await db.Producto.findAll({
                where:{categoriaId:4}
            })
            
            Promise.all([productos, categorias,velas,velones,accesorios,otra])

                return res.status(200).json({ 
                total: productos.length,
                data : productos, 
                cantCategorias:{velas:velas.length,velones:velones.length,accesorios:accesorios.length,otra:otra.length,total:4},
                categorias:categorias,
                status:200,
                url:'api/products'
            });
     
            
    } catch (error) {
        console.log(error);
    }
    },
    
    'detalle':async function (req, res) {
        try{ 
            let producto = await db.Producto.findByPk(req.params.id,{include:["categorias"]});
            res.status(200).json({ 
                data : producto,
                status:200,
                url: `api/products/${req.params.id}`
            });

        }
        catch (error){
            console.log(error);
        }
    }
}
     
module.exports = apiProductsController;