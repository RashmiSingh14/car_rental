const ErrorHandler = require('../utils/errorHandler')


module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal server msg";

    //handling cast error (wrong id error)
    if(err.name === 'CastError'){
        const message = 'Invalid id. ${err.path}';
        err = new ErrorHandler(message, 400);
    }
    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        error: err.stack
    })
}