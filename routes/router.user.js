// REQUIERO EXPRESS
const express = require("express");
const router = express.Router();

// LLAMO AL CONTROLADOR DE USERCONTROLLERS
const userController = require("../controllers/userController");
//LLAMO AL ARCHIVO DE VALIDACIONES DE USUARIO
const usuarioValidations = require("../middlewares/userValidation"); 
const loginValidations = require("../middlewares/loginValidation");
const isLoguedMiddleware = require('../middlewares/isLoguedMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

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
router.get("/login",isLoguedMiddleware,userController.login);
router.post("/login",loginValidations,userController.logueate);

/*** CREAR UN USUARIO ***/
router.get("/register",isLoguedMiddleware,userController.register);
router.post("/register", upload.single("image"),usuarioValidations, userController.nuevo);

router.get("/salir",userController.salir);
router.get("/nosotros",userController.nosotros);
router.get("/contacto",userController.contactos);
router.get("/listaUsuarios",authMiddleware,userController.listarUsuarios);

/*** VER PERFIL ***/
router.get("/user-detail",authMiddleware,userController.usuarioDetalle);
//router.put("/editar/:id",upload.single("image"),productController.actualizar);
module.exports = router;