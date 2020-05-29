
const UsuarioModel = require("../models/Usuario");

const registrarUsuario = async (req, res) => {
  const response = await UsuarioModel.registrarUsuario();
  res.status(200).json(response);
};


module.exports = {
  registrarUsuario
};
