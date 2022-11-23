const { body } = require("express-validator");

const validaciones = [
    body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    body("nombre").isLength({ min: 3 }).withMessage("El nombre debe tener 3 caracteres como mínimo"),
    body("usuario").notEmpty().withMessage("El usuario es obligatorio"),
    body("usuario").isLength({ min: 3 }).withMessage("El usuario debe terner como mínimo 3 caracteres"),
    body("usuario").isLength({ max: 8 }).withMessage("El usuario debe terner como máximo 8 caracteres"),
    body("password").notEmpty().withMessage("El password es obligatorio"),
    body("password").isLength({ min: 6 }).withMessage("El password debe terner como mínimo 6 caracteres"),
    body("password").isLength({ max: 10 }).withMessage("El password debe terner como máximo 10 caracteres"),
    body("email").notEmpty().withMessage("El email es obligatorio"),
    body("email").isEmail().withMessage("No es un email valido"),
    body("edad").notEmpty().withMessage("La edad es obligatoria"),
    body("edad").isInt().withMessage("No es una edad valida"),
    body("telefono").notEmpty().withMessage("El telefono es obligatorio"),
    body("telefono").isNumeric().withMessage("No es un teléfono valido"),
];
module.exports = validaciones;