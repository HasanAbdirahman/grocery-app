const express = require('express');
const path= require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const cors = require('cors')
const app = express();

// database connection
require("dotenv").config();
require("./config/database");


// middlewares
app.use(cors())
app.use(logger('dev')) // used in logging
app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5174', // Allow requests from this origin
    credentials: true // Enable cookies and authorization headers
  }));
  
const userRouter = require('./routes/users')
const productRouter = require('./routes/products')

// route path
app.set('/v1/user', userRouter)
app.set('/v1', productRouter)

// listen port
let PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
    console.log('app listening at port '+ PORT)
})
