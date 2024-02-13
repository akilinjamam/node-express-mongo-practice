const express = require('express');
const app = express();
const body_parser = require('body-parser');
const upload = require('./multer/multer');
const mongoose = require('mongoose');

const port = 5000;

app.use(body_parser.urlencoded({ extended: true }));
app.use(body_parser.json());

app.get('/', (req, res) => {
    res.send("server is running")
})

app.post('/register', upload.single('image'), (req, res) => {
    res.send("file is uploaded successfully")
})


app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// model:
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have to give name"]
    },
    img: {
        type: String,
        required: [true, "must have to give img"]
    }
})


const User = mongoose.model("User", userSchema);


// database connection:
const connectDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/userFile');
        console.log('database connected successfully')
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
connectDatabase();


app.get('/users', async (req, res) => {
    try {
        await User.find();
        res.status(200).sendFile(__dirname + "/user.html")
    } catch (error) {
        res.status(400).send(error.message);
    }
})

app.post('/users', upload.single('img'), async (req, res) => {
    try {
        const name = req.body.user;
        const img = req?.file?.filename;

        const data = {
            name,
            img
        }
        const newUser = new User(data);

        await newUser.save();

        res.status(201).send('file is uploaded successfully');

    } catch (error) {
        res.status(400).send(error.message);
    }


})





app.listen(port, () => {
    console.log(`server is running at port:${port}, http://localhost:${port}`);
})




