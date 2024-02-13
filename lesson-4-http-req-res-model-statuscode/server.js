const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.writeHead(202, { 'content-type': 'text/html' })
    res.write("<h1>hello</h1>")
    res.end()
})


server.listen(port, hostname, () => {
    console.log(`server is running successfully at localhost: http://${hostname}:${port}`)
})