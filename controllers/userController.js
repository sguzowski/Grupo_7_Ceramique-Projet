const fs = require("fs");
const path = require("path");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//LLAMO AL OBJETO DE ERRORES DE VALIDACIONES
const { validationResult } = require("express-validator");
//LLAMO A LA LIBRERIA PARA ENCRIPTAR CONTRASEÑAS
const bcrypt = require('bcryptjs');
// sequelize
const db = require('../database/models');



let controller = {

    index: function (req, res) {
        db.Producto.findAll()
            .then(productos => {
                res.render("index", { productos: productos });
            })

        //const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        //res.render("index", {productos:productos});
        //const productsVisited = products.filter((p) => p.category == "visited");
        //const productsInSale = products.filter((p) => p.category == "in-sale");
    },

    listarUsuarios: async function (req, res) {
        let admin = "mauryras";
        if (req.session.usuarioLogueado.usuario === admin) {
            /*LEO EL ARCHIVO Y RENDERIZO LA VISTA DE LISTA DE PRODUCTOS*/
            //const usuarios = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
            try {
                const usuarios = await db.Usuario.findAll();
                res.render("listaUsuarios", { usuarios: usuarios });

            } catch (error) {
                res.redirect("/");
            }
        } else {
            res.redirect("/");
        }
    },

    login: function (req, res) {
        res.render("login");
    },
    logueate: async function (req, res) {
        let errores = validationResult(req);
        let usuarioLogueado;

        if (errores.isEmpty()) {
            try {
               //BUSCO USUARIO EN BASE DE DATOS
                const userToLogin = await db.Usuario.findOne({
                    where: {
                        usuario: req.body.usuario,
                    }
                })
                
                if (userToLogin) {
                   
                    let password = bcrypt.compareSync(req.body.password, userToLogin.password);
                 
                    if (password == true) {
                        usuarioLogueado = userToLogin;
                    }

                }

                if (usuarioLogueado == undefined) {
                    let error = "Usuario no registrado o contraseña incorrecta";
                   // console.log("NO ENCONTRE EL USUARIO");
                    return res.render("login", { error: error });
                }
                req.session.usuarioLogueado = usuarioLogueado;
               // console.log(req.session.usuarioLogueado);
                return res.redirect("/");

            } catch (error) {
                res.render("login");
            }
        } else {
            res.render("login", { errores: errores.mapped() });
        }
    },

    register: function (req, res) {
        try {
            res.render("register")
        } catch (error) {
            console.log(error);
        }
    },



    nuevo: async function (req, res) {

        let errores = validationResult(req);

        try {
      
      if (errores.isEmpty()) {

            /*CREO EL USUARIO NUEVO PARA GUARDARLO*/
            const usuarioNuevo = {
                nombre: req.body.nombre,
                usuario: req.body.usuario,
                password: bcrypt.hashSync(req.body.password, 10),
                email: req.body.email,
                edad: req.body.edad,
                telefono: req.body.telefono,
                image: "user-vacio.jpg",
            };
            //console.log(usuarioNuevo);
            /*PREGUNTO SI ME VINO EL ARCHIVO DE IMAGEN*/
            if (req.file) {
                usuarioNuevo.image = req.file.filename;
            }   

        const repetido = await db.Usuario.findOne({
            where: {
                email: req.body.email,
            }
        })
          if (repetido) {
            res.render('register', {
                errores: {
                    email: {
                        msg: "Este email ya esta registrado"
                    }
                },
                old: req.body
            })
        } else {
    
            await db.Usuario.create(usuarioNuevo)
            .then(usuarioNuevo => {
                res.redirect("login");
              })
 
        }

    } else {
        res.render('register', {
            errores: errores.mapped(),
            old: req.body
        })
    }
    } catch (error) {
        console.log(error);
    }
    },

    contactos: function (req, res) {
        res.render("contacto");
    },

    nosotros: function (req, res) {
        res.render("nosotros");
    },
    salir: function (req, res) {
        //res.clearCookie('userEmail'); //elimino cookie
        req.session.destroy(); // elimino sesión
        res.redirect('/');
    },
    usuarioDetalle: function (req, res) {
        res.render("user-detail", { usuarioLogueado: req.session.usuarioLogueado });

    },


    /**** DELETE Q NO TENEMOS PARA USARIO PERO PODEMOS HACER UN BOTTON*/ 
    delete: async function (req, res) {
        try {
            await db.Usuario.destroy({
                where: {
                    id_user: req.params.id
                }
            })
            //res.clearCookie(''); // CUANDO LA HAGAMOS
            req.session.destroy();
            res.redirect("/")
        } catch (error) {
            console.log(error);
        }

    },


}

module.exports = controller;

