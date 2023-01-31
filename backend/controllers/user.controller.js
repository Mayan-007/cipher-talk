require('dotenv').config({ path: '../env/.env' })
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/email')
const {
    User: { User, validateUser },
} = require('../models')

const postRegister = async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { name, email, password } = req.body
    const user = new User({
        name,
        email,
        password,
    })

    try {
        await user.save()

        const verificationLink = `${
            process.env.BASE_URL
        }/verify?token=${jwt.sign(
            { email: user.email },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: '1h',
            }
        )}`

        const html = `
            <center>
            <h1>Verify your email address</h1>
            <p>Thanks for signing up for Cipher Talk! We're excited to have you as an early user.</p>
            <p>Please verify your email address by clicking the link below.</p>
            <a href="${verificationLink}">${verificationLink}</a>
            </center>
        `
        await sendEmail({
            email: user.email,
            subject: 'Verify your email address',
            html,
        })

        res.status(200).send({
            msg: 'A verification email has been sent to ' + user.email + '.',
        })
    } catch (err) {
        return res.status(400).send(err.message)
    }
}

const getVerify = async (req, res) => {
    const { token } = req.query
    if (!token) return res.status(400).send('Invalid token')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        const { email } = decoded

        const user = await User.findOne({ email })
        if (!user) res.status(404).send('Invalid Token! User not found')
        user.isVerified = true
        await user.save()

        res.status(200).send('Email Verification Successfully')
    } catch (err) {
        console.err('Error Verifying Email: ', err)
        res.status(500).send('Error Verifying Email')
    }
}

module.exports = {
    postRegister,
    getVerify,
}
