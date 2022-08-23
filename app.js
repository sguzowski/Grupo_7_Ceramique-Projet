const express = require('express');
const app = express();
app.use(express.static('public'));
app.set("view engine","ejs"); //CON ESTA LINEA LE DIGO A EXPRESS QUE USO EJS


app.listen(3003, ()=>{
    console.log('Servidor funcionando');
});

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
});
