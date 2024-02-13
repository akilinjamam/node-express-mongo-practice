const { validationResult } = require("express-validator");

const runValidation = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.json({
            totalError: error.array().length,
            error: error.array().map(err => err.msg)
        })
    }
    next()
}


module.exports = runValidation;