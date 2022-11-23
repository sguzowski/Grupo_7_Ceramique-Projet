const { body } = require("express-validator");

const validaciones = [
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  body("name").isString().withMessage("Tiene que ser un texto"),
  body("name").isLength({ min: 3 }).withMessage("tiene que tener mas de tres letras"),
  body("name").isLength({ max: 15 }).withMessage("no tiene que tener mas de 15 letras"),
  body("price").notEmpty().withMessage("El precio es obligatorio"),
];

module.exports = validaciones;