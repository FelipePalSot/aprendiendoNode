//Cargar express(http)
const express = require("express");
const router = express.Router();

//Cargar controlador
const ProjectController = require("../controllers/project");

//Definir rutas
router.post("/save", ProjectController.save);

//Exportar rutas
module.exports = router;