const app = require('./app');


const PORT = 5000;

app.listen(PORT, () => {
    console.log(`surver is running at port: ${PORT}, http://localhost:${PORT}`)
})