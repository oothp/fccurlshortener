const express = require('express')
const router = express.Router()
const controller = require('../controller/shortener')

router.post('/api/shorturl', controller.newUrl)
router.get('/api/shorturl/:short', controller.getUrl)
router.get('/', controller.getHome)

module.exports = router