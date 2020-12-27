const express = require('express')
const router = express.Router()
const path = require('path')
const indexcontroller = require('../controllers/indexcontroller')

// Reactjs
router.use(express.static(path.join(__dirname, '../views/build')))

// router.get('/', indexcontroller.getIndex)
router.post('/testdata', indexcontroller.postProc)
router.get('/testdataget', indexcontroller.getProc)

module.exports = router