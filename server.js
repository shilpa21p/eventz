require('dotenv').config();

const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

//router

const authRoute = require('./route/authRoute')
const userRoute = require('./route/userRoute')
const eventRoute = require('./route/eventRoute')

const connectDB = require('./db')

const PORT = process.env.PORT 

const app = express()

//body parser config
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use(cors()) // cors=> cross origin resource sharing => avoid port block, headers
app.use(cookieparser( process.env.COOKIE_SECRET)) // signed cookies config

//primary route path
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/user', userRoute)
app.use('/api/v1/event', eventRoute)

/*default route */
app.all(`/*`, (req,res) =>{
    res.status(404).json({ msg: "Request Path Not Found" })
})
app.listen(PORT, async() => {
    await connectDB()
    console.log(`server is running @http://localhost:${PORT}`)
})