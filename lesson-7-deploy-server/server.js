const http = require('http');
const reader = require('./routing');
require('dotenv').config();

const port = process.env.PORT;
console.log(port)


const server = http.createServer((req, res) => {

    if (req.url === '/') {
        reader(200, 'index.html', req, res)
    } else if (req.url === '/about') {
        reader(200, 'about.html', req, res)
    } else if (req.url === '/contact') {
        reader(200, 'contact.html', req, res)
    } else {
        reader(404, 'error.html', req, res)
    }
})


server.listen(port, () => {
    console.log(`server connected successfully at:${port}`)
})