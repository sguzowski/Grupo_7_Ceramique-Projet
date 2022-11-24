-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: 127.0.0.1    Database: ceramique-1
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` tinytext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'velones',''),(2,'otra',''),(3,'velas',NULL),(4,'velas',NULL),(5,'velas',NULL),(6,'accesorio',NULL);
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `categoriaId` int(11) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `image` varchar(45) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `marca` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoriaId_idx` (`categoriaId`),
  CONSTRAINT `categoriaId` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'VELÓN CANELA',1750,0,1,'Vela natural hecha de manera artesanal con cera vegetal. Sin derivados de petróleo ni productos químicos. Son velas energéticas que se usan para purificar y limpiar tu hogar o negocio de energías no deseadas','16625183653181662431981404vela-ruda.jpg',5,'1'),(2,'VELÓN PROFE',6000,0,2,'Velones arómaticos de gran calidad con propósitos. Purificación,fortuna y poder','vela-miel.jpg',15,'2'),(3,'VELÓN MIEL',3000,10,1,'No producen agentes contaminantes, y al encenderlas desprenden un ligero y agradable aroma a miel, siendo apta para personas alérgicas o asmáticas, ya que la cera contiene propiedades antibacterianas que contribuyen a mantener la casa limpia y desinfectada','vela-miel.jpg',10,'3'),(4,'VELÓN LAVANDA',3000,10,1,'romatiza tus espacios y genera una atmósfera de relajación con esta vela de lavanda y palo santo que ayuda a liberar la tensión emocional y alcanzar un estado de calma, serenidad y relajación mental. Es ideal para disfrutar antes de ir a dormir o en momentos de estrés, ansiedad, preocupación y negatividad','16625186045231662518204831vela-color.jpg',15,'4'),(5,'VELA DE LOCO',2132,10,1,'LA MAS SABROSA JAJAJA','user-vacio.jpg',3,'5'),(6,'VELIN',3000,0,2,'LA MEJOR DE TODAS','user-vacio.jpg',50,'6'),(7,'SANGRIENTO',2000,25,2,'La mejor vela mota','16651050623671662431046323velo-euca.jpg',20,'7'),(24,'Vela del amor',1212,12,1,'con esta ganas si o si','user-vacio.jpg',12,'2'),(27,'Vela del amor12',12341,12,1,'con esta ganas si o si12','user-vacio.jpg',12,'2'),(28,'Vela del amor21',1231423,12,1,'con esta ganas si o si','user-vacio.jpg',12,'2'),(40,'Vela del amor',2500,10,1,'con esta ganas si o si','1669157500810vela del amor.jpg',10,'mandatario'),(41,'Juan',1235412,12,1,'para espantar suegras','user-vacio.jpg',12,'Magoya1231234'),(43,'',0,0,1,'','user-vacio.jpg',0,''),(44,'Vela del amor123435667',2135346847,213,1,'con esta ganas si o si','user-vacio.jpg',123,'Cartocor'),(45,'Juan Grace',1590,12,1,'Algo que buscar en la vida','user-vacio.jpg',12,'Magoya'),(46,'Vela horrenda',12343,12,1,'para espantar suegras','1669166652530francotirador.jpg',12,'Magoya'),(47,'',0,0,1,'','user-vacio.jpg',0,''),(48,'',0,0,1,'','user-vacio.jpg',0,''),(49,'',0,0,1,'','user-vacio.jpg',0,''),(50,'',0,0,1,'','user-vacio.jpg',0,''),(51,'',0,0,1,'','user-vacio.jpg',0,''),(52,'',0,0,1,'','user-vacio.jpg',0,''),(53,'Vela horrenda',1235,12,1,'para espantar suegras','1669170683341avengers.jpg',123,'Magoya');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `usuario` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(45) NOT NULL,
  `edad` int(11) NOT NULL,
  `telefono` int(11) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Mauricio Raschi','mauryras','$2a$10$Vf6.J78ix0iXQZD751iEo.9ydaEYscRpyyzTPLbb0/MkHJS5dMFIO','maury_raschi@hotmail.com',34,123456,'16650133063871662431046323velo-euca.jpg'),(2,'Seba gato','mgato','$2a$10$GIbr8N0zZzDJogEuZQtohe1XNDajsfy0yay4mdW9qjLf7J953EnGW','gato@gmail.com',26,123456,'16650133063871662431046323velo-euca.jpg'),(3,'pepe','pepe12','$2a$10$3z/F400V/SKwoSnNZJfkgOuashlxUdQ2C6il8IUn3Q3131K1CPXpu','seba@arcor.com',24,123456,'16650133063871662431046323velo-euca.jpg'),(4,'jose manuel','josema','$2a$10$4rHB4KogBTidjgwnqlChl.i6MbHXVF4F6ZLxDin5E1Mo5vjF.sL7e','juancho@arcor.com',25,123456,'16650133063871662431046323velo-euca.jpg'),(5,'Juan Grace','Jgrace','$2a$10$HKlhqzktupXrzclL0pQFF.uuTSGS2iI1CvbY2wPgsfV1BrRuDJyb2','juan.grace@gmail.com',41,1165932377,'166735200007820190514_201530.jpg'),(6,'sebastian','gatoloco','$2a$10$zMgffO3D9eoiTuFx1qPCTOZpxPlhxI6AvIZFUEgZgdbSxfjGN8IPW','gatoloco@gmail.com',34,2147483647,'166735306942820190916_234018.jpg'),(7,'mauricio','mauricio','$2a$10$l3A8QZPe7IWOfI.H7gqnUe9MvxUocW9hIMAZPXyqpZMIpks/INvj2','mauricio@gmail.com',45,1232543465,'166735331958420190524_122625.jpg'),(8,'josema','josema1','$2a$10$SNs/UABwabsnqaueY0.kJuoRXK6neviOtYYYaJj7537PX6q6BsuWy','josema@gmail.com',23,1231453,'user-vacio.jpg'),(9,'josemamamaa','asdkjsadosad','$2a$10$tTRaxOoLZdxZ4v7L2oTfzumipGx25NZktsQ7e/A7ZBDPXy6lY3g/6','matipier_carp@hotmail.com',34,1232543465,'user-vacio.jpg'),(10,'juangsadf','magoya123','$2a$10$gdMsa3.RHxVQzD.p2HoR6.TwPc0T6n6..FoH6ZVGlPL/albPXOEF2','magoyalora@gmail.com',23,123423465,'1669167444728merli.jpg'),(11,'BELLEZA Argentina','Miabuela','$2a$10$StZv.PE96VVh9BwUSFPki.SzStRUV3/uWjxqQd0TRo9t2CWHCM8tS','tuabuela@gmail.com',435,12353667,'1669167485976toystory.jpg'),(12,'','','$2a$10$gV55fkjiLAs.heWH1znkK.hpQqMByWBeJ9CwQ165gPAF0hIbO0/72','',0,0,'user-vacio.jpg'),(13,'','','$2a$10$niJQ7rQjRLxhhdQJX6bO7..KiAWXAfccpl0c3resdinY1P8HciMde','12@gmai.com',0,0,'user-vacio.jpg'),(14,'josema','josema1','$2a$10$lT3oG9oxjRsgU5YvfSG/8uB7VToaTGhM926jiiLZ/wugbsKRreEyO','josemagroso@gmail.com',123,2147483647,'1669168437433bumblebee.jpg'),(15,'josema','maite','$2a$10$MdSmmxtMGIEFzPMOKNAnxOgfdgIsHiJ.CpzhhlXQBC65fl5PP0I7m','maitehermosa@gmail.com',34,1234135437,'1669168572355monsters.jpg'),(16,'zoela','zoela','$2a$10$lnVu2EV2nMJ4lxZ1rgp/JeSlUjujEIyBC3LSvK.0AOqSpVMwGZ.kO','zoelaloca@gmail.com',9,123415,'1669168701532nemo.jpg'),(17,'Juan','juang','$2a$10$etUFANRVmSy2tV/nfPRgiOnWIpVelIL9iCfU2IO.wuqKn5euv0gSm','juangrace@gmail.com',123,1231231,'user-vacio.jpg'),(18,'laconcha de tu madre','forro','$2a$10$IkubVrGY1UNmBBgxlIHul.woiF.lKEawOgFCf48kOUv2tQW/R1Nqu','forro@gmail.com',123,12345136,'1669169645568peliculas.png'),(19,'Juan Grace','alguna','$2a$10$ulxd.tbvCsQHCGzREJ1OiOMrxU92PkM2t/GlfJxVfHCBISW2OxoZe','alguna@gmail.com',34,213451123,'1669170347770vice.jpg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuariosproductos`
--

DROP TABLE IF EXISTS `usuariosproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuariosproductos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usariosId` int(11) DEFAULT NULL,
  `productosId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_usuarios_idx` (`usariosId`),
  KEY `fk_productos_idx` (`productosId`),
  CONSTRAINT `fk_productos` FOREIGN KEY (`productosId`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios` FOREIGN KEY (`usariosId`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuariosproductos`
--

LOCK TABLES `usuariosproductos` WRITE;
/*!40000 ALTER TABLE `usuariosproductos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuariosproductos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-24 18:41:16
