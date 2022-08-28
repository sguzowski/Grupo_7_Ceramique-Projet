// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// LLAMO AL CONTROLADOR DE USERCONTROLLERS
const userController = require("../controllers/userController");

router.get("/",userController.index);
router.get("/login",userController.login);
router.get("/register",userController.register);

module.exports = router;