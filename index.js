require('dotenv').config()
const express = require('express')
const app = express()

//configs view engine
const configViewEngine = require('./src/configs/viewEngine')
configViewEngine(app);

const path = require('path');


app.use(express.static('public'));

//configs port, host
const port = process.env.PORT || 8080
const host = process.env.HOST_NAME || "localhost"

//required routes
const initWebRouters = require('./src/routes')
initWebRouters(app);

app.listen(port,host, () => {
  console.log(`Example app listening on port ${port}`)
})