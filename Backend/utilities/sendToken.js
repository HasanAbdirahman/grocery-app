function sendToken(user, statusCode, res){
    let token = user.getJWTToken();

    let option={
        httpOnly: true,
        expire: new Date(Date.now() * process.env.COOKIE_EXPIRES * 24 * 60 * 60),
        sameSite: 'strict'
    }
    res.status(statusCode).json({success: true, user}).cookie({'token': token, option})
}

module.export = sendToken