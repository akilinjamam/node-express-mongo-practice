const http = require('http');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.end("hello  Iam your first server")
})


server.listen(port, hostname, () => {
    console.log(`server is running successfully at localhost: http://${hostname}:${port}`)
})