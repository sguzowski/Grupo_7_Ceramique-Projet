const fs = require("fs");
const path = require("path");

//JSON DE USUARIO LO LEO Y ALMACENO
const usersFilePath = path.join(__dirname, "../data/users.json");

//JSON DE PRODUCTOS LO LEO Y ALMACENO
const productsFilePath = path.join(__dirname, "../data/products.json");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//LLAMO AL OBJETO DE ERRORES DE VALIDACIONES
const { validationResult } = require("express-validator");
//LLAMO A LA LIBRERIA PARA ENCRIPTAR CONTRASEÑAS
const bcrypt= require ("bcrypt");


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
    logueate: function(req,res){
        // let errores = validationResult(req);
        // let usuarioLogueado;
        console.log(req.body.usuario);
        console.log(req.body.password);
        // console.log(errores.errors);
        
        // if(errores.isEmpty()){
        // const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        // for(let i=0; i<usuarios.length; i++ ){
        //     if(usuarios[i].usuario ===req.body)
        //     {
        //         if(bcrypt.compareSync(req.body.password,usuarios[i].password))
        //         {
        //             usuarioLogueado = usuarios[i];
        //             console.log("ENCONTRE EL USUARIO");
        //             break;
        //         }
                                    
        //     }

        // }
        // if(usuarioLogueado==undefined){
        //     let error ="Usuario no registrado o contraseña incorrecta";
        //     console.log("NO ENCONTRE EL USUARIO");
        //     return res.render("login",{error:error});
           
        // }
        // //req.session.usuarioLogueado = usuarioLogueado;
        // res.render("contacto")
        // }else{
        // console.log("HAY ERRORES DE VALIDACION");
        // res.render("login",{errores:errores.mapped()});
        // }
        },

    register: function(req,res){
        res.render("register");
        },

    nuevo: function(req,res){
        let errores = validationResult(req);
        const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        console.log(errores);
        /* CONSULTO SI EL USUARIO EXISTE  Y SI EXISTE NO LO GUARDO - SI HAY ERRORES NO GUARDO NADA*/
        let repetido = usuarios.find((u) => u.usuario == req.body.usuario);
        if(repetido==undefined && errores.errors.length==0){
        /*CREO EL PRODUCTO NUEVO PARA GUARDARLO*/
        const usuarioNuevo = {
        id: Date.now(),
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        password: bcrypt.hashSync("req.body.password",10),
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
            if(repetido!=undefined){
            let msgRepetido = "Error: Nombre de usuario repetido!!!! Escriba otro usuario para registrarse"
            res.render("register",{msgRepetido:msgRepetido});
            }else{
            errores = errores.mapped();
            let old =req.body;
            res.render("register",{errores:errores, old:old})
            }
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