const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const userRoute = require('./routes/user.routes');

// CORS
app.use(cors());

// body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use('/users', userRoute)


// route not found:

app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found"
    })
})

// server error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "something broke"
    })
})




module.exports = app;