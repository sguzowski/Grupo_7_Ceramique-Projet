/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
const { CLIENT_RENEG_LIMIT } = require("tls");
const productsFilePath = path.join(__dirname, "../data/products.json");


let controller = {
    
    productDetail: function (req,res){

        let productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        producto = productos.find((p) => p.id == req.params.id);
        res.render("product-detail", { producto: producto });

        },
    carro: function(req,res){
        res.render("carro");
         },

    crear: function(req,res){
        res.render("crear");
         },

    editar: function(req,res){
        res.render("editar");
        },
    lista: function(req,res){
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("lista", {productos:productos}); 
        },
    guardar: function(req,res){
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

        //console.log(req.file);

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

        console.log(productoNuevo);
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
        console.log("ENTRO A ACTUALIZAR")
            },
    borrar: function(req,res){
        console.log("ENTRO A BORRAR")
            },
}

module.exports=controller;