
const express = require('express')
const bookRouter = require('./router/bookrouter')
const userRouter = require('./router/userrouter')
const connectdb = require("./db/dbcontroller")
const err = require('./errorMiddleware/errorMW')
const cookieParser = require('cookie-parser')

const app = express()

const port = 2000
require('dotenv').config();
connectdb()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/api', bookRouter) 
app.use('/api', userRouter)


app.use(err)   
app.listen(port )

console.log(err);
