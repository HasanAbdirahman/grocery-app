const User = require('../models/user')
const sendToken = require('../utilities/sendToken')
const sendEmail = require('../utilities/sendEmail.js')

async function registerUser(req, res, next){
    let {firstName, lastName, password, confirm, email}= req.body;

    if (req.body.password !== req.body.confirmPassword) return next(new Error("Password should match the confirm password"));
    
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
 async function forgotPassword(req, res, next){
    let {email} = req.body;
    let user = await User.findOne(email);
    if (!user)return next(new Error('User doesnot exit. Please register'))

    let resetToken = await user.resetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetUrl = `${process.env.FRONTEND_URL}/api/v1/resetPassword/${resetToken}`;
    const message = `This is the url to reset your password ${resetUrl} and
     please ignore this request if you are the sender`;

    try {
        await sendEmail({
          email: user.email,
          Subject: "Dance Festival Password Reset",
          message,
        });
        res
          .status(200)
          .json({ success: true, message: `Email sent to ${user.email}` });
      } catch (error) {
        user.resetPassword = null;
        user.resetExpired = null;
    
    
        return next(new Error(error.message, 500));
      }
}

async function resetPassword(req, res, next){
    // get the token and hash 
    let resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    let user = User.findOne({
        resetPasswordToken, resetExpired: {$gt: Date.now()}
    })

    if (!user) return next(new Error('user dont exist'))

    if (req.body.password !== req.body.confirm){
        return next(new Error('Password are not matching'))
    }
    user.password = req.body.password;
    user.resetPassword = null;
    user.resetExpired = null;
    
    await user.save();


    sendToken(user, 200, res)
    

}
module.exports = {
    registerUser, login, logout, forgotPassword, resetPassword
}

res.cookies(token, null )

