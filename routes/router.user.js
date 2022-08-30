// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// LLAMO AL CONTROLADOR DE USERCONTROLLERS
const userController = require("../controllers/userController");

router.get("/",userController.index);
router.get("/login",userController.login);
router.get("/register",userController.register);
router.get("/nosotros",userController.nosotros);
router.get("/contacto",userController.contactos);

module.exports = router;