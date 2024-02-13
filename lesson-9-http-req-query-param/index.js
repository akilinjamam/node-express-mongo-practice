const app = require('./app')
const port = 30001;


app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});

