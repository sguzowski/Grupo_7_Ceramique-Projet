// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// ************ MULTER ************
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/bancoimagenes");
  },
  filename: function (req, file, cb) {
    //console.log({ file });
    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});
const upload = multer({ storage });
const authMiddleware = require('../middlewares/authMiddleware');

//LLAMO AL CONTROLADOR DE PRODUCTOS
const productController = require("../controllers/productController");
//LLAMO A LAS VALIDACIONES DE PRODUCTOS
const validacionesProducto = require("../middlewares/productValidation");

const { application } = require("express");

/*** MUESTRA CARRO DE COMPRAS - AUN SIN FUNCIONES ***/
router.get("/carro",productController.carro);

/*** MUESTRA DETALLE DE PRODUCTO ***/
router.get("/product-detail/:id",productController.productDetail);

/*** EDITAR UN PRODUCTO ***/
router.get("/product-detail/editar/:id",authMiddleware,productController.editar);
router.put("/editar/:id",upload.single("image"),productController.actualizar);

  /*** CREAR UN PRODUCTO ***/
  router.get("/crear",authMiddleware,productController.crear);
  router.post("/crear",upload.single("image"),productController.guardar);

/*** BORRA UN PRODUCTO ***/
router.delete("/borrar/:id",authMiddleware,productController.borrar);

/*** LISTA PRODUCTOS ***/
router.get("/lista",productController.lista);

module.exports = router;