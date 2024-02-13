const express = require('express');
const app = express();

// middleware 
const middleware = (req, res, next) => {
    req.currentTime = new Date(Date.now());
    console.log('this is middleware');
    next();
}

// to use middleware in all route:
app.use(middleware)




app.get('/', (req, res) => {
    res.send('server is running successfully' + req.currentTime)
    console.log('this is get request')
})
app.get('/about', (req, res) => {
    res.send('server is running successfully in about route' + req.currentTime)
    console.log('this is get request')
})


// error handling middleware:
// app.use((req, res, next) => {
//     res.send("404 bad url request")
// })

// app.use((err, req, res, next) => {
//     res.status(500).send("something broke!")
// })






module.exports = app;