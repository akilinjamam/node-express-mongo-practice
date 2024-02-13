const app = require('./app');



const PORT = 4000;
app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}, http://localhost:${PORT}`)
})