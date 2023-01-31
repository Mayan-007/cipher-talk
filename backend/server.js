require('dotenv').config({ path: './config/config.env' })
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const { userRoutes } = require('./routes')

const PORT = process.env.PORT || 5000

;(async () => await connectDB())()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/users', userRoutes)

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
