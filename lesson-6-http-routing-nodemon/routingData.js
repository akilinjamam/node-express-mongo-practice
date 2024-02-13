const fs = require('fs');

const reader = (statusCode, route, req, res) => {
    fs.readFile(route, 'utf-8', (err, data) => {
        if (data) {
            res.writeHead(statusCode, { "content-type": "text/html" })
            res.write(data);
            res.end()
        } else if (err) {
            console.log(err)
        }
    })
}

module.exports = reader