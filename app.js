const express = require('express'); //REQUIERO EXPRESS 
const app = express(); // USO EXPRESS        
app.use(express.static('public')); //COLOCO ACCESIBLE LA CARPETA PUBLIC
const path = require('path'); // USO EL METODO PATH PARA LAS DIRECCIONES 
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require ("express-session"); // REQUIERO SESSION PARA TRABAJAR CON LA LIBRERIA

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//CON ESTA LINEA LE DIGO A EXPRESS QUE USO EJS
app.set("view engine","ejs"); 
app.use(session({secret:"secreto"})); //CONFIGURO SESIONES

// LEVANTO EL SERVIDOR 
app.listen(3003, ()=>{
    console.log('Servidor funcionando en puerto 3003');
});

/////////// VOY LLAMANDO LAS RUTAS DE LOS CONTROLADORES PARA RENDERIZAR LA PAGINA O EJECUTAR ACCION///////
const userRouter = require('./routes/router.user'); // Rutas user
const productsRouter = require('./routes/router.products'); // Rutas products

app.use('/',userRouter);
app.use('/products', productsRouter);
app.use('/user', userRouter);
