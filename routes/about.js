const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../controllers/mainController')

router.get('/about', controllers.about)


module.exports = router;