const { body } = require("express-validator");

const validaciones = [
    body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener 3 caracteres como mínimo"),
    body("usuario")
    .notEmpty()
    .withMessage("El usuario es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El usuario debe terner como mínimo 3 caracteres")
    .bail()
    .isLength({ max: 8 })
    .withMessage("El usuario debe terner como máximo 8 caracteres"),
    body("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .bail()
    .isLength({ min: 6 })
    .withMessage("El password debe terner como mínimo 6 caracteres")
    .bail()
    .isLength({ max: 10 })
    .withMessage("El password debe terner como máximo 10 caracteres"),
    body("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .bail()
    .isEmail()
    .withMessage("No es un email valido"),
    body("edad")
    .notEmpty()
    .withMessage("La edad es obligatoria")
    .bail()
    .isInt()
    .withMessage("No es una edad valida"),
    body("telefono")
    .notEmpty()
    .withMessage("El telefono es obligatorio")
    .bail()
    .isNumeric()
    .withMessage("No es un teléfono valido"),  
];
module.exports = validaciones;