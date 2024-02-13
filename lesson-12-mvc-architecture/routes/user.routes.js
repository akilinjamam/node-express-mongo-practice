const express = require('express');
const { getUsers, postUsers } = require('../controller/users.controller');

const userRouter = express.Router();


userRouter.get("/users", getUsers)

userRouter.post("/users", postUsers)

module.exports = userRouter;