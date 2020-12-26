const express = require('express')
const path = require('path')
const router = express.Router()

router.use(express.static(path.join(__dirname, '../views/build')))

router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

router.post('/testdata', (req,res) => {
    console.log(req.body)
    if (req.body.namee == "" && req.body.agee == "") {
        res.redirect('back')
    } else {
        res.end(JSON.stringify(req.body, null, 3));
    }
})

module.exports = router