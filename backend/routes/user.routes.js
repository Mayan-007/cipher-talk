require('dotenv').config({ path: './env/.env' })
const express = require('express')
const router = express.Router()
const {
    user: { postRegister, getEmailVerify, postLogin, postOTPVerify },
} = require('../controllers')

router.post('/register', postRegister)

router.get('/register/verify', getEmailVerify)

router.post('/login', postLogin)

router.post('/login/verify', postOTPVerify)

module.exports = router
