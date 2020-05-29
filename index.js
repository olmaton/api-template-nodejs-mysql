require('dotenv').config()
const app = require("./app");
const {API_VERSION,IP_SERVER,PORT_SERVER} = require("./config")

app.listen(PORT_SERVER,()=>{
    console.log(`############# API REST ${API_VERSION} ##############`)
    console.log(`##### http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION} #####`)
    console.log(`########################################`)
})
  
