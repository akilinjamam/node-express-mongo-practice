const { check } = require("express-validator");

const loginValidation = [
    check('email')
        .trim()
        .notEmpty()
        .withMessage('email is missing')
        .isEmail()
        .withMessage('email is not valid'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('password is missing')
]

module.exports = loginValidation;