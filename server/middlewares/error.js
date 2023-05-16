const notFound = (req, res, next) => {
    const error = new Error (`Not Found - ${req.originalUrl}`);
    res.status(404);
    next();
}

const erroHandler = (err, req, res, next) => {
    let statusCode = res.statusCode || 200 ? 500 : res.statusCode;
    let message = err.message

    if(err.name === 'CastError' && err.Kind === 'ObjectId'){
        statusCode = 400;
        message = 'Resource not found'
    }

    res.statusCode(statusCode).json({
        message,
        stack: process.env.NODE_ENV !== 'production' ? null : err.stack
    })
}

module.exports = {
    notFound,
    erroHandler
}