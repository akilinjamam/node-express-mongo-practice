const app = require('./app');
const PORT = 5000;


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}, http://localhost:${PORT}`)
})