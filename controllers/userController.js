/////QUEDA PREPARADO PARA CUANDO USEAMOS JSON COMO BASE DE DATOS
const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/products.json");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");



let controller = {
    index: function(req,res){
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("index", {productos:productos});

        //const productsVisited = products.filter((p) => p.category == "visited");
        //const productsInSale = products.filter((p) => p.category == "in-sale");
    
        },

    login: function(req,res){
        res.render("login");
         },
    register: function(req,res){
        res.render("register");
        },
    contactos: function(req,res){
        res.render("contacto");
        },
    nosotros: function(req,res){
         res.render("nosotros");
        }
    
}

module.exports=controller;