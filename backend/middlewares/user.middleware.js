const {
    User: { User, validateUser },
} = require('../models')

const isVerified = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })

    if (!user) {
        return res.status(404).send('User not Found!')
    }

    if (user.isVerified) {
        next()
    } else {
        return res.send('User not verified')
    }
}
