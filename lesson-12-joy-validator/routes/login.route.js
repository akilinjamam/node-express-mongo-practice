const { loginController } = require('../controller/login.controller');
const { runValidator } = require('../validation');
const { joiLoginSchema } = require('../validation/joiSchema');

const routes = require('express').Router();


routes.post('/login', runValidator(joiLoginSchema), loginController)


module.exports = routes;