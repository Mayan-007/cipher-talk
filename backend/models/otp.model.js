const mongoose = require('mongoose')
const Schema = mongoose.Schema

const otpSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        otp: {
            type: String,
            required: true,
        },
        expireAt: {
            type: Date,
            default: Date.now,
            index: { expires: '1m' },
        },
    },
    {
        timestamps: true,
    }
)

const OTP = mongoose.model('otp', otpSchema)

module.exports = OTP
