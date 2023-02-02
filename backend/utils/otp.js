const { sendEmail } = require('./email')
const { OTP } = require('../models')

const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000)
}

const sendOTP = async (options) => {
    const result = await sendEmail(options)
    return result
}

const saveOTP = async (email, otp) => {
    const newOTP = new OTP({ otp: otp, email: email })
    return await newOTP.save()
}

module.exports = {
    generateOTP,
    sendOTP,
    saveOTP,
}
