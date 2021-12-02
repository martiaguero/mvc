const express = require('express')
const path = require('path')
const router = express.Router()
const controllers = require('../controllers/mainController')

router.get('/', controllers.main)


module.exports = router;