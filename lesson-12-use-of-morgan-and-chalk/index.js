const express = require('express');
const chalk = require('chalk')
const app = express();
const port = 5000;

const morgan = require('morgan');


app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("successfull");
})

app.get("/user", (req, res) => {
    res.send("data found");
})

app.post('/user', (req, res) => {
    res.send('data posted successfully')
})

app.listen(port, () => {
    // console.log(chalk.blue(`server is running at port:${port}, http://localhost:${port}`))
    // console.log(chalk.blue.bgRed(`server is running at port:${port}, http://localhost:${port}`))
    console.log(chalk.blue.bgRed.bold.underline(`server is running at port:${port}, http://localhost:${port}`))
})
