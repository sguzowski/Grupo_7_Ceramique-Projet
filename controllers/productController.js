/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const productsFilePath = path.join(__dirname, "../data/products.json");

const db = require('../database/models');

const { validationResult } = require("express-validator"); //LLAMO AL OBJETO DE ERRORES DE VALIDACIONES

let controller = {

  productDetail: function (req, res) {

    /*RENDERIZO LA VISTA DEL DETALLE DEL PRODUCTO DE ACUERDO AL ID SELECCIONADO*/
    //let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    //let producto = productos.find((p) => p.id == req.params.id);
    //res.render("product-detail", { producto: producto});

    db.Producto.findByPk(req.params.id) //milagro anda esto
      .then(producto => {
        let productos = { producto }
        res.render("product-detail", { producto: producto });
      });

  },

  carro: function (req, res) {
    res.render("carro");
  },

  crear: function (req, res) {
    /*RENDERIZO LA VISTA DEL FORMULARIO DE CREAR*/
    res.render("crear");
    
  },


  editar: async function (req, res) {
   
    /*LEO EL ARCHIVO Y RENDERIZO LA VISTA DE EDITAR DE PRODUCTOS*/
    
    try {
      let producto = await db.Producto.findByPk(req.params.id, {
        include: [{association:"categorias"}]
       });
       

       res.render("editar", { producto: producto });
    } catch (error) {
      console.log(error)
    }

  },

  lista: async (req, res) => {
    try {
      const productos = await db.Producto.findAll();
      // res.send (productos)
      res.render("lista", { productos: productos });


    } catch (error) {
      console.log({ error });
    }

    
  },


  guardar: async function (req, res) {
    //const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    /*CREO EL PRODUCTO NUEVO PARA GUARDARLO*/

let errores = validationResult(req)

try {

  if (errores.isEmpty()) {
      const productoNuevo =
      {
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        description: req.body.description,
        categoriaId: req.body.category,
        image: "user-vacio.jpg",
        marca: req.body.marca,
        stock: req.body.stock,
               
      };
      
      /*PREGUNTO SI ME VINO EL ARCHIVO DE IMAGEN*/
      if (req.file) {
        productoNuevo.image = req.file.filename;
      };     


      console.log ("************", productoNuevo)
      await db.Producto.create(productoNuevo)
        .then(productoNuevo => {
          res.redirect("/");
        })
      }
      else {
        const producto = await db.Producto.findAll()
                res.render('crear', {
                    errores: errores.mapped(),
                    old: req.body,
                    producto: producto
                })
                
      }

    
    }catch (error){
      console.log(error);
    };

  },

  actualizar: function (req, res) {
    /*LEO EL ARCHIVO DE PRODUCTOS*/
    

    /*BUSCO EL ID QUE VINO POR PARAMETRO Y REEMPLAZO LOS DATOS QUE VIENEN POR BODY*/
   

    /*VEO SI HAY ARCHIVO Y CAMBIO NOMBRE DE IMAGEN GUARDADA*/
    try {
      const actualizarProducto =
      {
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        marca: req.body.marca,
      }

      if (req.file) {
        //fs.unlinkSync("./public/bancoimagenes/" + actualizarProducto.image);
        actualizarProducto.image = req.file.filename;
      }
      db.Producto.update(actualizarProducto, {
        where: {
          id: req.params.id,
        }
      })
        .then(productoNuevo => {
          res.redirect("/products/product-detail/" + req.params.id);
        })
    }
    catch (error) {
      console.log(error);
    }

  },

  borrar:async function (req, res) {

    try {
      db.Producto.destroy({
        where: {
          id: req.params.id,
        },

      });
   
      res.redirect("/");

    } catch (error) {
      console.log(error);
    }
  },
};


module.exports = controller;