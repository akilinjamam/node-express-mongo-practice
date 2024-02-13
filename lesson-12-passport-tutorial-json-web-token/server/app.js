const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRound = 10;
const User = require('./models/user.model');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv').config();

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(passport.initialize());
require('./config/passport');

// home route
app.get('/', (req, res) => {
    res.status(200).send('<h1>welcome to new server with jwt</h1>')
})


// register get
app.get('/register', (req, res) => {
    res.status(200).send('<h1>welcome to register</h1>')
})

// register post
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username: username })

        if (user) return res.send({ message: "user is already exists!" })


        bcrypt.hash(password, saltRound, async (err, hash) => {
            const userData = {
                username,
                password: hash
            }
            const newUser = new User(userData);
            await newUser.save().then((user) => {
                res.status(201).json({
                    status: 201,
                    message: 'registration data posted successfully',
                    user: {
                        id: newUser._id,
                        username: user.username
                    }
                })
            }).catch((err) => {
                res.status(400).json({
                    status: 400,
                    message: 'registration failed',
                    err: err.message
                })
            })



        })

    } catch (error) {
        res.status(400).json({
            status: 201,
            message: 'registration data failed to post'
        })
    }
})


// login get
app.get('/login', (req, res) => {
    res.status(200).send('<h1>welcome to login</h1>')
})


// login post
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username: username });


    if (!user) {
        return res.status(401).json({
            status: 401,
            message: 'user not found'
        })
    }

    if (password) {
        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({
                status: 401,
                message: 'password did not matched'
            })
        }
    } else {
        return res.status(401).json({
            status: 401,
            message: 'password not found'
        })
    }

    const payload = {
        id: user._id,
        username: user.username
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: "2d"
    });

    return res.status(200).send({
        success: true,
        message: "User is logged in successfully",
        token: "Bearer " + token
    })

})

app.get('/profile', passport.authenticate('jwt', { session: false }),
    (req, res) => {
        return res.status(200).send({
            success: true,
            message: "data found successfully",
            user: {
                id: req.user._id,
                username: req.user.username
            }
        })
    }
);

// resuource not found

app.use((req, res, next) => {
    res.status(404).json({
        statuse: 404,
        message: 'route not found'
    })
})

// server error

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})
module.exports = app;