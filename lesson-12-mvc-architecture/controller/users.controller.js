const user = require("../model/users.model");
const path = require('path');

exports.getUsers = (req, res) => {
    res.sendFile(path.join(__dirname + "/../view/index.html"))
}

exports.postUsers = (req, res) => {
    const name = req.body.name;
    const age = Number(req.body.age);

    const data = {
        name,
        age
    };

    user.push(data);

    res.status(200).json({
        success: true,
        message: user
    })
}