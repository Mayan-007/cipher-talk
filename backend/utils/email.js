const nodeMailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASS } = process.env

const sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: `Cipher Talk <${process.env.EMAIL_USER}>`,
        to: options.email,
        subject: options.subject,
        html: options.html,
    }

    await transporter
        .sendMail(mailOptions)
        .then(() => {
            console.log('Email sent')
        })
        .catch((err) => {
            console.log('Email not sent')
            console.log(err)
        })
}

module.exports = { sendEmail }
