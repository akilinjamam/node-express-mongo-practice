const express = require('express');
const app = express();
const body_parser = require('body-parser');

app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json());

app.get('/', (req, res) => {
    res.send('hello express routing')
});


// dynamic route will work only for number, not for any alphabet
// app.get('/products/:id([0-9]+)', (req, res) => {
//     const id = req.params.id
//     res.send(`<p>id = ${id}</p>`)
// })


// dynamic route will work only for number and maximum 3 times, not for any alphabet
// app.get('/products/:id([0-9]{3})', (req, res) => {
//     const id = req.params.id
//     res.send(`<p>id = ${id}</p>`)
// })


// dynamic route will work only for alphabet, not for any number
app.get('/products/:id([a-z]+)', (req, res) => {
    const id = req.params.id
    res.send(`<p>id = ${id}</p>`)
})


// dynamic route will work only for alphabet and number both
app.get('/products/:id([a-zA-Z0-9]+)', (req, res) => {
    const id = req.params.id
    res.send(`<p>id = ${id}</p>`)
})


// if any wrong value is given in dynamic filed, it will show this route
app.use('*', (req, res) => {
    res.status(200).json({
        message: "invalid url"
    })
})


module.exports = app