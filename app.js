const express = require('express'); //REQUIERO EXPRESS 
const app = express(); // USO EXPRESS        
app.use(express.static('public')); //COLOCO ACCESIBLE LA CARPETA PUBLIC
const path = require('path'); // USO EL METODO PATH PARA LAS DIRECCIONES 
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.set("view engine","ejs"); //CON ESTA LINEA LE DIGO A EXPRESS QUE USO EJS

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


/*
//ENVIA INFO ARCHIVO INDEX
app.get('/', (req,res)=>{
    //res.sendFile(__dirname + '/views/index.ejs');
    res.render('index')
});

//ENVIA INFO ARCHIVO LOGIN
app.get('/login', (req,res)=>{
    //res.sendFile(__dirname + '/views/login.ejs');
    res.render('login')
});

//ENVIA INFO ARCHIVO PRODUCTDETAIL
app.get('/product-detail', (req,res)=>{
    //res.sendFile(__dirname + '/views/product-detail.ejs');
    res.render('product-detail')
});

//ENVIA INFO ARCHIVO REGISTER
app.get('/register', (req,res)=>{
    //res.sendFile(__dirname + '/views/register.ejs');
    res.render('/register')
});

//ENVIA INFO ARCHIVO CARRO
app.get('/carro', (req,res)=>{
    //res.sendFile(__dirname + '/views/carro.ejs');
    res.render('carro');
});*/
