const mysql = require('mysql2/promise');
const {MYSQL_CONFIG} = require("../config");
const pool = mysql.createPool(MYSQL_CONFIG);
console.log("Pool:",pool.getMaxListeners());
module.exports = pool;
