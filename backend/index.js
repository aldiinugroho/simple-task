const express = require('express')
const app = express()
const path = require('path')
const port = 3080

// controllers
const indexcontroller = require("./controllers/indexcontroller");

// reactJS
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Headers","*")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    next()
})

app.get('/', indexcontroller)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})