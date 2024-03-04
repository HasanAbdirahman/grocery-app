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
    resetPassword: String,
    resetExpired: String,
})

userSchema.pre('save', async function(next){
    if (!this.isModified(this.password)) return next();
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getJWTToken = function(){
    return jwt.sign({
        id: this._id, expire: process.env.EXPIRED_IN
    },secret= process.env.SECRET)
}

userSchema.methods.comparePassword = function(enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};
userSchema.methods.resetPasswordToken = function (){
    // encrypting the token and making hexidecimal
    let token = crypto.randomBytes(20).toString('hex');
    // decrypting and passing it to the resetPassword as the token
     this.resetPassword = crypto.createHash('sha256').update(token).digest('hex')
    //    the token expires in 10 min
    this.resetExpired = Date.now() * 10 * 60 * 1000;
    return this.resetPassword
}


module.exports = mongoose.model('User', userSchema)