const app = require('./app');
const config = require('./config/config');
require('./config/db')

const port = config.port;

app.listen(port, () => {
    console.log(`server is running at port:${port}, http://localhost:${port}`)
})