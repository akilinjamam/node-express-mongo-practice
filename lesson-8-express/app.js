const express = require('express');
// const path = require('path')
const app = express();
const userRoute = require('./routes/user.route');


app.use('/api/user', userRoute)

app.use('/registration', (req, res) => {
    // res.status(200).json({
    //     success: true,
    //     message: 'I am get request at registration'
    // })

    res.redirect('/api/user/login')
})


app.get('/', (req, res) => {
    res.statusCode = 200
    // res.sendFile(path.join(__dirname, 'views', 'index.html'))
    res.sendFile(__dirname + '/views/index.html')

    // store data in cookies
    // res.cookie("name", "julia")
    // res.cookie("age", "30")
    // res.end()

    // clear data from cookies
    // res.clearCookie("age")
    // res.end()

    // send data to header
    res.append("id", "130000");
    res.end()
})

// for invalid route:
app.use((req, res) => {
    res.send("<h1>404! not a valid url<h1/>")
})


module.exports = app