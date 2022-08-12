const express = require('express');
const app = express();
app.use(express.static('public'));


app.listen(3003, ()=>{
    console.log('Servidor funcionando');
});

//ENVIA INFO ARCHIVO INDEX
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

//ENVIA INFO ARCHIVO PRODUCTCART
app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

//ENVIA INFO ARCHIVO LOGIN
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

//ENVIA INFO ARCHIVO PRODUCTDETAIL
app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

//ENVIA INFO ARCHIVO REGISTER
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});


app.get('/carro', (req,res)=>{
    res.sendFile(__dirname + '/views/carro.html');
});
/*<<<<<<< HEAD
app.get("/header", (req,res)=>{
    res.sendFile(__dirname + "/views/header.html");
});
=======*/
app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/carrito.html');
});
/*>>>>>>> e16436289294f53aee090a1458cc1685b593b7f2*/
