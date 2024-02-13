const { createregister } = require('../controller/register.controller');
const runValidation = require('../validation');
const registerValidation = require('../validation/registerValidation');

const route = require('express').Router();


route.post('/register', registerValidation, runValidation, createregister);

module.exports = route;