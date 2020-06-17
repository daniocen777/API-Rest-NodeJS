var express = require("express");
var router = express.Router();
var RiesgoController = require("./../controllers/riesgo_controller");

router.post("/", RiesgoController.riesgoList);

module.exports = router;
