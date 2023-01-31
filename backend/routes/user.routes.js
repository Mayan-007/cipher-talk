require('dotenv').config({ path: './env/.env' })
const express = require('express')
const router = express.Router()
const {
    user: { postRegister, getVerify },
} = require('../controllers')

router.post('/register', postRegister)

router.get('/verify', getVerify)

module.exports = router
