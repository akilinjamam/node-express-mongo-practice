const { registerController } = require('../controller/register.controller');
const { runValidator } = require('../validation');
const { joiRegistrationSchema } = require('../validation/joiSchema');

const routes = require('express').Router();


routes.post('/register', runValidator(joiRegistrationSchema), registerController)


module.exports = routes;