// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// LLAMO AL CONTROLADOR DE USERCONTROLLERS
const productController = require("../controllers/productController");

router.get("/carro",productController.carro);
router.get("/product-detail",productController.productDetail);
router.get("/crear",productController.crear);
router.get("/editar",productController.editar);
router.get("/lista",productController.lista);

module.exports = router;