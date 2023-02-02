require('dotenv').config({ path: '../env/.env' })
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {
    email: { sendEmail },
    otp: { generateOTP, sendOTP, saveOTP },
} = require('../utils')
const {
    User: { User, validateUser },
    OTP,
} = require('../models')

const postRegister = async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const { name, email, password, confirm_password } = req.body
    const user = new User({
        name,
        email,
        password,
    })

    try {
        User.find({ email }, (err, users) => {
            if (err) {
                return res.status(400).send(err.message)
            }

            if (users.length > 0) {
                return res.status(400).send('User already registered')
            }
        })

        if (password !== confirm_password) {
            return res.status(400).send('Password does not match')
        }

        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        user.salt = salt

        await user.save()

        const verificationLink = `${
            process.env.BASE_URL
        }/register/verify?token=${jwt.sign(
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
            <a href="${verificationLink}">Verification Link</a>
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

const getEmailVerify = async (req, res) => {
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

const postLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }, (err, user) => {
            if (err) {
                return res.status(400).send(err.message)
            }

            if (user.length == 0) {
                return res.status(400).send('User not found')
            }
        }).clone()

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).send('Invalid Credentials')

        const otp = await generateOTP()

        const options = {
            email: user.email,
            subject: 'OTP for login',
            html: `<center><h1>OTP for login is ${otp}</h1></center>`,
        }

        await saveOTP(options.email, otp)
        await sendOTP(options)

        res.status(200).send('OTP sent to your email')
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
}

const postOTPVerify = async (req, res) => {
    const { email, otp } = req.body

    console.log('email: ', email)
    console.log('otp: ', otp)

    try {
        await OTP.findOne({ email }, (err, verifyOtp) => {
            if (err) {
                return res.status(400).send(err.message)
            }

            if (verifyOtp.length == 0) {
                return res.status(400).send('OTP not found')
            }

            if (verifyOtp.otp !== otp) {
                return res.status(400).send('Invalid OTP')
            } else {
                // JWT sign in
                const payload = {
                    user: {
                        id: verifyOtp.email,
                    },
                }

                jwt.sign(
                    payload,
                    process.env.JWT_SECRET_KEY,
                    {
                        expiresIn: '7d',
                    },
                    (err, token) => {
                        if (err) throw err
                        res.status(200).send({ token })
                    }
                )

                return res.status(200).send({ message: 'OTP verified' })
            }
        }).clone()
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Failed to Verify OTP' })
    }
}

module.exports = {
    postRegister,
    getEmailVerify,
    postLogin,
    postOTPVerify,
}
