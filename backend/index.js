const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 3080

// reactJS
// app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Headers","*")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","*")
    next()
})

// controllers
const indexcontroller = require("./controllers/indexcontroller");

app.use('/', indexcontroller)
app.use('/testdata', indexcontroller)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})