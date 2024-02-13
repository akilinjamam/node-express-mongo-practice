const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());


const routes = require('./routing_path/index');

const port = 5000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'welcome to new server with joy validator'
    })
})


app.use('/api/', routes.map(route => route.path))

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
})

