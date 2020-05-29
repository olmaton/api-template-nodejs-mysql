const jwt = require("jsonwebtoken");
const moment = require("moment");

exports.createAccessToken = function (usuario) {
    const payLoad = {
        id: usuario.id,
        usuario: usuario.usuario,
        iat: moment().unix(),
        exp: moment().add(7, "days").unix()
    }
    return jwt.encode(payLoad, process.env.JWTKEY);
}

exports.createRefreshToken = function (usuario) {
    const payLoad = {
        id: usuario.id,
        iat: moment().unix(),
        exp: moment().add(30, "days").unix()
    }
    return jwt.encode(payLoad, process.env.JWTKEY);
}

exports.decodeToken = function (token) {
    return jwt.decode(token, process.env.JWTKEY);
}