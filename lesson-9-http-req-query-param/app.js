const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
    // res.send("I am at home route")


    // use of query:
    // const id = req.query.id;
    // const age = req.query.age;
    // const name = req.query.name;

    //  const { id, age, name } = req.query;

    // params:
    // const id = req.params.id;
    // const age = req.params.age;
    // const name = req.params.name;

    // send request through header:
    // const id = req.header('id')
    // const name = req.header('name')
    // const age = req.header('age')

    // res.send(`<h1>student id is: ${id}, name: ${name}, age: ${age}</h1>`)

    res.send(`hello`)
})



app.post('/user', (req, res) => {
    const body = req.body;
    res.send(body.name)
})


app.post('/register', (req, res) => {
    const body = req.body;
    res.send(`<h1>my name is ${body.name}, and my age is: ${body.age}</h1>`);
})

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

module.exports = app;