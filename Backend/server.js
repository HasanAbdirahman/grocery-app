const express = require('express');
const path= require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')
const app = express();

// database connection
require("dotenv").config();
require("./config/database");

// middlewares
app.use(logger('dev')) // used in logging
app.use(express.json());
app.use(cookieParser());

// route path
app.use('/v1/user', require("./routes/users"))


// listen port
let PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
    console.log('app listening at port '+ PORT)
})
