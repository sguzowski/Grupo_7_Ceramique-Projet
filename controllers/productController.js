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
        res.render("lista");
        },
    guardar: function(req,res){
        console.log("ENTRO A GUARDAR")
        },
    actualizar: function(req,res){
        console.log("ENTRO A ACTUALIZAR")
            },
    borrar: function(req,res){
        console.log("ENTRO A BORRAR")
            },
}

module.exports=controller;