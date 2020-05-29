const API_VERSION = "v1";
const IP_SERVER = "localhost"
const PORT_SERVER=process.env.PORT_SERVER||3000 
const MYSQL_USER=process.env.MYSQL_USER
const MYSQL_HOST="localhost"
const MYSQL_PASSWORD=process.env.MYSQL_PASSWORD
const MYSQL_DATABASE=process.env.MYSQL_DATABASE
//const MYSQL_PORT=1433
module.exports = {
    PORT_SERVER,
    API_VERSION,
    IP_SERVER,
    MYSQL_CONFIG:{
        user: MYSQL_USER,
        host: MYSQL_HOST,
        password: MYSQL_PASSWORD,
        database: MYSQL_DATABASE,
        connectionLimit:10,
        waitForConnections: true,
        queueLimit: 0
        //port: MYSQL_PORT 
    }
}