const express = require('express');
const path= require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

const app = express();

// database connection
require("dotenv").config();
require("./config/database");

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// route path
app.set('/v1/user', require("./routes/users"))


// listen port
let PORT = process.env.PORT || 3000;
app.listen(PORT, function (){
    console.log('app listening at port '+ PORT)
})
