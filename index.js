require("dotenv").config()

const express = require('express')
const cors    = require('cors')

const router  = require('./src/routes/routes')
const port = process.env.PORT

const app     = express()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port,() => {})

app.get('/',(request,response)=>{
  response.send("Hello world")
})