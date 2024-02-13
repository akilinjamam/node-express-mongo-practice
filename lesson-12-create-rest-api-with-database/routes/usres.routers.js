const { getAllUsers, getOneUser, postUsers, updateUser, deleteUser } = require('../controller/users.controller');

const route = require('express').Router();


route.get('/', getAllUsers)
route.post('/', postUsers)
route.get('/:id', getOneUser)
route.patch('/:id', updateUser)
route.delete('/:id', deleteUser)


module.exports = route;