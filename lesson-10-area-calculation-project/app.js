const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.get('/triangle', (req, res) => {
    res.sendFile(__dirname + '/triangle.html');
})
app.post('/triangle', (req, res) => {
    const base = req.body.base;
    const height = req.body.height;
    const result = .5 * base * height
    res.send(`<h1>Triangle : ${result}</h1>`);
})

app.get('/circle', (req, res) => {
    res.sendFile(__dirname + '/circle.html');
})


app.post('/circle', (req, res) => {
    const base = req.body.base;
    console.log(base)

    const result = Math.PI * base * base

    res.send(`<h1>circle: ${result}</h1>`);
})



module.exports = app;