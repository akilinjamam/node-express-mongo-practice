const { check } = require("express-validator");

const registerValidation = [
    check('name')
        .trim()
        .notEmpty()
        .withMessage('name is missing')
        .isLength({ min: 5 })
        .withMessage('name length  should be minimum 5'),
    check('email')
        .trim()
        .notEmpty()
        .withMessage('email is missing')
        .isEmail()
        .withMessage('email is not valid'),
    check('password')
        .trim()
        .notEmpty()
        .withMessage('password is missing'),
    check('dob')
        .trim()
        .notEmpty()
        .withMessage('dob is empty'),
]

module.exports = registerValidation;