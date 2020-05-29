const express = require("express");
const {registrarUsuario} = require("../controllers/Usuarios");
//const autenticated = require("../middleware/autenticated")
const api = express.Router();

api.post("/usuarios/registrar-usuario",registrarUsuario);

module.exports = api;
