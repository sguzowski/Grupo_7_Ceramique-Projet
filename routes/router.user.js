// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// LLAMO AL CONTROLADOR DE USERCONTROLLERS
const userController = require("../controllers/userController");
//LLAMO AL ARCHIVO DE VALIDACIONES DE USUARIO
const usuarioValidations = require("../middlewares/userValidation"); 
const loginValidations = require("../middlewares/loginValidation");

// ************ MULTER ************
const multer = require("multer");

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/users");
  },
  filename: function (req, file, cb) {
    //console.log({ file });
    // cb(null, file.fieldname + "-" + Date.now());
    cb(null, Date.now() + "" + file.originalname);
  },
});
const upload = multer({ storage });

router.get("/",userController.index);

/*** LOGUEAR UN USUARIO ***/
router.get("/login",userController.login);
router.post("/login",userController.logueate);

/*** CREAR UN USUARIO ***/
router.get("/register",userController.register);
router.post("/register",upload.single("image"),usuarioValidations,userController.nuevo);


router.get("/nosotros",userController.nosotros);
router.get("/contacto",userController.contactos);
router.get("/listaUsuarios",userController.listarUsuarios);
module.exports = router;