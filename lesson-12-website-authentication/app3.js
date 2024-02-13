// password hashing:
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();
const User = require('./models/user.model');
const md5 = require('md5');


const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = process.env.PORT || 5000;
const path = require('path');

const dburl = process.env.MONGOOSE_URI
const connect = async () => {
    try {
        // mongoose connection:
        await mongoose.connect(dburl)
        console.log('database connected successfully')

    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

connect()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))
})

app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const bodyData = {
            email,
            password: md5(password)
        }
        const newUser = new User(bodyData);
        const result = await newUser.save();

        res.status(201).json(result)

    } catch (error) {
        res.status(500).json(error.message);
    }
})


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email });


        if (findUser && email && password) {
            if (findUser.password === md5(password)) {
                res.status(200).json({
                    message: 'user found successfully'
                })
            } else {
                res.status(404).json({
                    message: 'password does not matched'
                })
            }
        } else {
            res.status(404).json({
                message: 'user not found'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})



app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found"
    })
})


app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke"
    })
})


app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})