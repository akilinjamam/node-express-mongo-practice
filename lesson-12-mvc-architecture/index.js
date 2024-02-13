const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// cors
app.use(cors())

const allRoutes = [
    {
        route: userRouter
    },
    {
        route: productRouter
    },
]

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: 'server is running successfully'
    })
})



allRoutes.map(routes => {
    return app.use(routes.route)
})

// for (let i = 0; i < allRoutes.length; i++) {
//     app.use(allRoutes[i].route)
// }



app.use((req, res) => {
    res.status(404).json({
        message: "resource not found"
    })
})


app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`)
})