
const { createLogin } = require('../controller/login.controller');
const runValidation = require('../validation');
const loginValidation = require('../validation/loginValidation');

const route = require('express').Router();


route.post('/login', loginValidation, runValidation, createLogin);

module.exports = route;