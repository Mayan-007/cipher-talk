const crypto = require('crypto')
const sendEmail = require('../utils/email')
const {
    User: { User, validateUser },
    Token: { Token },
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

    user.save((err, user) => {
        if (err) {
            return res.status(500).send({ msg: err.message })
        }
        const token = new Token({
            _userId: user._id,
            token: crypto.randomBytes(32).toString('hex'),
        })

        token.save((err) => {
            if (err) {
                return res.status(500).send({ msg: err.message })
            }
            sendEmail({
                email: user.email,
                subject: 'Account Verification Token',
                text: `Hello ${user.name},
                Please verify your account by clicking the link: ${process.env.BASE_URL}/confirmation/${token.token}`,
            })
            res.status(200).send(
                'A verification email has been sent to ' + user.email + '.'
            )
        })
    })
}

const getConfirmation = (req, res) => {
    Token.findOne({ token: req.params.token }, (err, token) => {
        if (err)
            return res.status(500).send({
                type: 'database-error',
                msg: err.message,
            })
        if (!token)
            return res.status(400).send({
                type: 'not-verified',
                msg: 'We were unable to find a valid token. Your token may have expired.',
            })

        User.findOne({ _id: token._userId }, (err, user) => {
            if (!user)
                return res.status(400).send({
                    msg: 'We were unable to find a user for this token.',
                })
            if (user.isVerified)
                return res.status(400).send({
                    type: 'already-verified',
                    msg: 'This user has already been verified.',
                })

            user.isVerified = true
            user.save((err) => {
                if (err) {
                    return res.status(500).send({ msg: err.message })
                }
                res.status(200).send(
                    'The account has been verified. Please log in.'
                )
            })
        })
    })
}

module.exports = {
    postRegister,
    getConfirmation,
}
