// Front-End Server

// Dependencies
const express = require('express')
const app = express()

// Configuration / Middleware
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Root
app.get('/', (req,res) => {
    res.status(200).json({
        message: 'Welcome to sunnyY&Y'
    })
})



// Listen
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})