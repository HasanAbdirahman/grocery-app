const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto= require('crypto')

const userSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        trim: true
    },
    lastName : {
        type: String,
        required: true,
        trim: true
    },
    email : {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password : {
        type: String,
        required: true,
        trim: true
    },
    confirm : {
        type: String,
        required: true,
        trim: true
    },
    resetPasswordToken: String,
    expiredPssword: String
})

userSchema.pre('save', function(next){
    if (!this.isModified(this.password)) return next();
    this.password = bcrypt.hash(this.password, 10)
})

userSchema.methods.getJWTToken = ()=>{
    return jwt.sign({
        id: this._id, expire: process.env.EXPIRED_IN
    },secret= process.env.SECRET)
}

userSchema.methods.comparePassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};


module.exports = mongoose.model('User', userSchema)