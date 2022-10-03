const { body } = require("express-validator");

const validaciones = [
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
];
module.exports = validaciones;