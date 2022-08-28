/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
//const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");


let controller = {
    index: function(req,res){
        res.render("index");
        },
    login: function(req,res){
        res.render("login");
         },
    register: function(req,res){
        res.render("register");
        }
}

module.exports=controller;