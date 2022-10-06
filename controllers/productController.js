/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const productsFilePath = path.join(__dirname, "../data/products.json");

const { validationResult } = require("express-validator"); //LLAMO AL OBJETO DE ERRORES DE VALIDACIONES

let controller = {
    
    productDetail: function (req,res){

        /*RENDERIZO LA VISTA DEL DETALLE DEL PRODUCTO DE ACUERDO AL ID SELECCIONADO*/
        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        let producto = productos.find((p) => p.id == req.params.id);
        res.render("product-detail", { producto: producto});

        },  
    carro: function(req,res){
        res.render("carro");
         },

    crear: function(req,res){
        /*RENDERIZO LA VISTA DEL FORMULARIO DE CREAR*/
    res.render("crear");
         },

    editar: function(req,res){
        /*LEO EL ARCHIVO Y RENDERIZO LA VISTA DE EDITAR DE PRODUCTOS*/
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const producto = productos.find((p) => p.id == req.params.id);
        res.render("editar", {producto: producto});
        },
    lista: function(req,res){

        /*LEO EL ARCHIVO Y RENDERIZO LA VISTA DE LISTA DE PRODUCTOS*/
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("lista", {productos:productos}); 
        },
    guardar: function(req,res){
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        /*CREO EL PRODUCTO NUEVO PARA GUARDARLO*/
        const productoNuevo = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        description: req.body.description,
        image: "user-vacio.jpg",
        stock: req.body.stock,
        marca: req.body.marca,
        };
     
        /*PREGUNTO SI ME VINO EL ARCHIVO DE IMAGEN*/
        if (req.file) {
            productoNuevo.image = req.file.filename;
          }
          
        /*SUMO EL ARCHIVO A PRODUCTOS Y ESCRIBO DE NUEVO EL JSON*/
        productos.push(productoNuevo);
        const data = JSON.stringify(productos, null, " ");
        fs.writeFileSync(productsFilePath, data);
        res.redirect("/");

        },
    actualizar: function(req,res){
        /*LEO EL ARCHIVO DE PRODUCTOS*/
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        
        /*BUSCO EL ID QUE VINO POR PARAMETRO Y REEMPLAZO LOS DATOS QUE VIENEN POR BODY*/
        productos.forEach((p) => {
        if (p.id == req.params.id) {
            p.name = req.body.name;
            p.price = req.body.price;
            p.discount = req.body.discount;
            p.description = req.body.description;
            p.category = req.body.category;
            p.stock =req.body.stock;
            p.marca =req.body.marca;

        /*VEO SI HAY ARCHIVO Y CAMBIO NOMBRE DE IMAGEN GUARDADA*/
        if (req.file && req.body.image !="user-vacio.jpg") {
            fs.unlinkSync("./public/bancoimagenes/" + p.image);
            p.image = req.file.filename;
            }
            }
        });

    /*ACTUALIZO JSON*/
    const data = JSON.stringify(productos, null, " ");
    fs.writeFileSync(productsFilePath, data);

    /*REDIRIJO A LOS NUEVOS DETALLES*/
    res.redirect("/products/product-detail/" + req.params.id);
    
     },

    borrar: function(req,res){
    
    /*LEO EL ARCHIVO DE PRODUCTOS*/
    let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
    /*BUSCO ID QUE VINO POR PARAMETRO*/
    const producto = productos.find((p) => p.id == req.params.id);
     /*FILTRO EL ID A ELIMINAR*/
    productos = productos.filter((p) => p.id != req.params.id);
    /*BORRO LA FOTO DEL ID ELIMINADO SIEMPRE Y CUANDO NO SEA LA POR DEFECTO*/
    if (producto && producto.image !="user-vacio.jpg") {
          fs.unlinkSync("./public/bancoimagenes/" + producto.image);
    }
    /*ACTUALIZO JSON Y REDIRECCIONO*/
    const data = JSON.stringify(productos, null, " ");
    fs.writeFileSync(productsFilePath, data);
    res.redirect("/");
    }
}

module.exports=controller;