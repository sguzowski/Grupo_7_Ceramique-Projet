const fs = require("fs");
const path = require("path");

//JSON DE USUARIO LO LEO Y ALMACENO
const usersFilePath = path.join(__dirname, "../data/users.json");

//JSON DE PRODUCTOS LO LEO Y ALMACENO
const productsFilePath = path.join(__dirname, "../data/products.json");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//LLAMO AL OBJETO DE ERRORES DE VALIDACIONES
const { validationResult } = require("express-validator"); 


let controller = {
    index: function(req,res){
        const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        res.render("index", {productos:productos});
        //const productsVisited = products.filter((p) => p.category == "visited");
        //const productsInSale = products.filter((p) => p.category == "in-sale");
        },
    listarUsuarios: function(req,res){
        /*LEO EL ARCHIVO Y RENDERIZO LA VISTA DE LISTA DE PRODUCTOS*/
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        res.render("listaUsuarios",{usuarios:usuarios});
         },

    login: function(req,res){
        res.render("login");
         },

    register: function(req,res){
        res.render("register");
        },

    nuevo: function(req,res){
        let errores = validationResult(req);
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        console.log(errores.errors);
        /* CONSULTO SI EL USUARIO EXISTE  Y SI EXISTE NO LO GUARDO - SI HAY ERRORES NO GUARDO NADA*/
        let repetido = usuarios.find((u) => u.usuario == req.body.usuario);
        
        if(repetido==undefined && errores.errors.length==0){
            
        /*CREO EL PRODUCTO NUEVO PARA GUARDARLO*/
        const usuarioNuevo = {
        id: Date.now(),
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: req.body.password,
        email: req.body.email,
        edad: req.body.edad,
        telefono: req.body.telefono,
        image: "user-vacio.jpg",
        };
     
        /*PREGUNTO SI ME VINO EL ARCHIVO DE IMAGEN*/
        if (req.file) {
            usuarioNuevo.image = req.file.filename;
          }
          
        /*SUMO EL ARCHIVO A PRODUCTOS Y ESCRIBO DE NUEVO EL JSON*/
        usuarios.push(usuarioNuevo);
        const data = JSON.stringify(usuarios, null, " ");
        fs.writeFileSync(usersFilePath, data);
        res.render("listaUsuarios",{usuarios:usuarios});
      
        }else{
            let msgRepetido = "Error: Nombre de usuario repetido!!!! Escriba otro usuario para registrar"
            res.render("register",{msgRepetido:msgRepetido});
        }
        },

    contactos: function(req,res){
        res.render("contacto");
        },

    nosotros: function(req,res){
         res.render("nosotros");
        }
    
}

module.exports=controller;