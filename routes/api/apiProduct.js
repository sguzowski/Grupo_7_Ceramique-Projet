const express = require('express');
const router = express.Router();
const productosController = require("../../controller/api/productosController")

router.get("/lista",productController.lista);

router.get("/crear",productController.crear);
router.post("/crear",upload.single("image"), productController.guardar);

router.get("/product-detail/editar/:id",productController.editar);
router.put("/editar/:id",upload.single("image"), productController.actualizar);

router.delete("/borrar/:id",productController.borrar);

module.exports = router;