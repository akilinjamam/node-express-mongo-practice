const express = require('express');
const app = express();

const registrationRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');

// express buildin body-parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// specific query search with express validator;
app.get('/', (req, res) => {
    res.send('hello');
})


app.use('/api', registrationRoute)
app.use('/api', loginRoute)




app.post('/register',)





const port = 3000;
app.listen(port, () => {
    console.log(`server is running at port: ${port}, http://localhost:${port}`);
})