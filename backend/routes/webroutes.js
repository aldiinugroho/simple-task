const express = require('express')
const router = express.Router()
const path = require('path')
const indexcontroller = require('../controllers/indexcontroller')
const notfoundcontroller = require('../controllers/notfoundcontroller')

// Reactjs
router.use(express.static(path.join(__dirname, '../views/build')))

router.post('/testdata', indexcontroller.postProc)
router.get('/testdataget', indexcontroller.getProc)

// handle 404 not found
router.get('*', notfoundcontroller.getError)

module.exports = router