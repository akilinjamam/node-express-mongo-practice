require('dotenv').config()
const mongoose = require('mongoose');



const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('database connected successfully')
    } catch (error) {
        console.log(error.message)
    }
}


connectDb();