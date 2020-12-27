const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const app = express()
const port = 3080

// reactJS
// app.use(express.static(path.join(__dirname, '../frontend/build')))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(session({
    secret: "secretSes",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: false
        // set false untuk login setiap client restart
        // set value untuk expire login 24 * 60 * 60 * 1000 = 24 jam
    }
}))
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
app.use('/testdataget', indexcontroller)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})