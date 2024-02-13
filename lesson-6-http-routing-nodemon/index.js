const http = require('http');
const fs = require('fs');
const reader = require('./routingData');
const port = 3000;
const hostname = '127.0.0.1'



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


server.listen(port, hostname, () => {
    console.log(`server connected successfully at: http://${hostname}:${port}`)
})