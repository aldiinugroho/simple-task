const express = require('express')
const bodyparser = require('body-parser')
const session = require('express-session')
const webroutes = require("./routes/webroutes")
const app = express()
const port = process.env.PORT || 3080


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

app.use(webroutes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})