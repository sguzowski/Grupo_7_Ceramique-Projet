/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
//const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");


let controller = {

    productDetail: function (req,res){
        res.render("product-detail");
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
}

module.exports=controller;