const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const {API_VERSION} = require("./config")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Header HTTP


//Router Basic
const usuarioRoutes = require("./routes/usuario");

app.use(`/api/${API_VERSION}`,usuarioRoutes);
module.exports = app;