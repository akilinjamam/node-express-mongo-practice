const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const userRoute = require('./routes/usres.routers');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + "/view/index.html")
})

app.use('/api/users', userRoute)


// error routing
app.use((req, res, next) => {
    res.status(404).json({
        message: 'incorrect route'
    })
})

app.use((err, req, res, next) => {
    res.status(500).json({
        message: 'server is broken'
    })
})





module.exports = app;