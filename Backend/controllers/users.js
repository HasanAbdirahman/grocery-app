const User = require('../models/user')
const sendToken = require('../utilities/sendToken')

async function registerUser(req, res, next){
    let {firstName, lastName, password, confirm, email}= req.body;

    if (password !== confirm) return next(new Error("Password should match the confirm password"));
    delete this.confirm;

    let user = await User.create({firstName, lastName, password, email})
    if (!user){
        return next(new Error('Invalid User'))
    }

    let userExist = await User.findOne({email});
    if (userExist){
        return next(new Error('User Exist Please Login'))
    }

    sendToken(user, 200, res)
}

async function login(req, res, next){
    let {email, password} = req.body
    if (!email || !password) {
        next(new Error("Invalid email or password"));
      }
    let user = await User.findOne(email);
    if (!user)return next(new Error('User doesnot exit. Please register'))

    let isPasswordMismatched = await user.comparePassword(password);
    if (!isPasswordMismatched) return new Error('Password is incorrect');

    sendToken(user, 200, res)
}

 function logout(req, res, next){
    let token = req.cookies.token;
    
    if (token){
        res.clearCookie('token')
    }
    res.status(200).json({message: 'Log out successfuly',  success: true,})
    
}
module.exports = {
    registerUser, login, logout
}