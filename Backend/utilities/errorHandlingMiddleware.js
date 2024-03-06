function errorHandlingMiddleware(err, req, res, next){
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

    res.status(statusCode)
    res.status(statusCode).json({
        success:false,
        error: {
            message: err.mess
        }
    })
}

module.exports.default = errorHandlingMiddleware