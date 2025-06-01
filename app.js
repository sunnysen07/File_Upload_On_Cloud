const express = require('express')
const app = express()
const userRoutes = require('./routs/user.routs')
const { eventNames } = require('./model/user.model')
const dotenv = require('dotenv')
const connectedToDB = require('./config/db')
const userfileRoute = require('./routs/userfile.route')
const cookieparser = require('cookie-parser')


dotenv.config()
connectedToDB()
require('dotenv').config();

app.set("view engine","ejs")
app.use(cookieparser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


// app.use('/index',userfileRoute)
app.use('/',userRoutes)

app.listen(3000)