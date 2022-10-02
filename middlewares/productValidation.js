const { body } = require("express-validator");

const validaciones = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    // .isString()
    // .withMessage("Tiene que ser un texto")
    // .bail()
    .isLength({ min: 3 })
    .withMessage("tiene que tener mas de tres letras")
    .bail()
    .isLength({ max: 15 })
    .withMessage("no tiene que tener mas de 15 letras"),
  body("precio").notEmpty().withMessage("El precio es obligatorio"),
];

module.exports = validaciones;