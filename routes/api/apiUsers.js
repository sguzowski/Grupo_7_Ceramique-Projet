const express = require('express');
const router = express.Router();
const apiUsersController = require("../../controllers/api/apiUsersController")

router.get("/",apiUsersController.lista);

router.get("/:id",apiUsersController.detalle);

module.exports = router;
