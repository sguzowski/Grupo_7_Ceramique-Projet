CREATE DATABASE Ceramique;
CREATE TABLE Categorias (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre varchar(50) not null,
descripcion varchar(200)
);
CREATE TABLE Marcas (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre varchar(50) not null,
descripcion varchar(200) 
);
CREATE TABLE Productos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name varchar(100) not null,
price int not null,
discount int not null,
stock int not null,
description varchar(200) ,
image varchar(200) ,
categoriaId int ,
marcaId int,
foreign key (categoriaId) references Categorias(id),
foreign key (marcaId) references Marcas(id)
);
 CREATE TABLE Usuarios (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre varchar(100) not null,
usuario varchar(100) not null,
password varchar(200) not null,
email varchar(100) not null,
edad int not null,
telefono int not null,
image varchar(100) 
);
CREATE TABLE usuariosproductos (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
userId int not null,
foreign key (userId) references Usuarios(id),
productId int not null,
foreign key (productId) references Productos(id)
);