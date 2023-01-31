require('dotenv').config({ path: './config/config.env' })
const express = require('express')
const router = express.Router()
const {
    user: { postRegister, getConfirmation },
} = require('../controllers')

router.post('/register', postRegister)

router.get('/confirmation/:token', getConfirmation)

module.exports = router
