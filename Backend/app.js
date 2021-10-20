const express = require('express')

const app = express()

const errorHandlerMiddleware = require('./Middleware/Error')

app.use(express.json())

// All route imports here

const product = require('./Routes/productRoute')

app.use("/api/v1" , product)

// Error handling middleware

app.use(errorHandlerMiddleware)


module.exports = app