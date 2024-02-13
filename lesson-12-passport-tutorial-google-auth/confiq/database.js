require('dotenv').config();
const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_URL;


const connectDb = async () => {
    try {
        await mongoose.connect(mongo_url);
        console.log('database is connected successfully')
    } catch (error) {
        console.log(error)
    }
}


connectDb();

