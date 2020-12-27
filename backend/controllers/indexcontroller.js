const express = require('express')
const path = require('path')
const router = express.Router()

router.use(express.static(path.join(__dirname, '../views/build')))

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

router.post('/testdata', (req,res) => {
    if (req.body.namee == "" && req.body.agee == "") {
        console.log('input data is empty')
        res.redirect('back')
    } else {
        console.log('==== in url:/testdata ====')
        console.log(req.body)
        console.log('==========================')
        req.session.clientData = req.body
        res.redirect('/testdataget')
    }
})

router.get('/testdataget', (req,res) => {
    if (req.session.clientData == null) {
        var a = req.session.clientData
        console.log(a + ' : in url:/testdataget ("no data in session / session is clear")')
        res.redirect('/')
    } else {
        var a = req.session.clientData
        req.session.destroy()
        // delete req.session.clientData;
        // req.session.clientData = null
        console.log('==== in url:/testdataget ====')
        console.log(a)
        console.log('=============================')
        res.send(a)
    }
})

module.exports = router