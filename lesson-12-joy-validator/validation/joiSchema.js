const joi = require('joi');
module.exports.joiRegistrationSchema = joi.object({
    name: joi.string().min(3).max(31).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(6).required(),
    confirmPassword: joi.ref("password"),
    dob: joi.date().required(),
    age: joi.number().required(),
    // languages: joi.array().items(joi.string()).required()
    // isRegistered: joi.boolean().required()
})

module.exports.joiLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(6).required()
})




