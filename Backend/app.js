const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const errorHandlerMiddleware = require('./Middleware/Error')

app.use(express.json())
app.use(cookieParser())
// All route imports here

const product = require('./Routes/productRoute')
const user = require('./Routes/userRoutes')

app.use("/api/v1" , product)
app.use("/api/v1" , user)

// Error handling middleware

app.use(errorHandlerMiddleware)


module.exports = app