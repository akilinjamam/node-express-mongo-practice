const express = require('express');
const app = express();


// static middleware:
app.use(express.static("public"))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})



module.exports = app;
