const { v4: uuid4 } = require('uuid')

let users = require('../models/users.model');

const getAllUsers = (req, res) => {
    res.send({ users });
}

const postAllUsers = (req, res) => {
    const id = uuid4();
    const userName = req.body.userName;
    const email = req.body.email;

    const newUser = {
        id,
        userName,
        email
    }

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: 'data posted successfully',
    })
}

const updateUsers = (req, res) => {
    const userId = req.params.id;



    const userName = req.body.userName;
    const email = req.body.email;



    const updated = users.filter((user) => user.id === userId).map(selected => {
        selected.userName = userName,
            selected.email = email
    })

    console.log(updated)

    res.status(200).json({
        success: true,
        message: "successfully data updated",
        result: users
    })
}


const deleteUsers = (req, res) => {
    const userId = req.params.id;

    users = users.filter(selected => selected.id !== userId);

    console.log(users)

    res.status(200).json({
        success: true,
        message: "successfully data deleted",
        result: users
    })
}


module.exports = {
    getAllUsers,
    postAllUsers,
    updateUsers,
    deleteUsers
}