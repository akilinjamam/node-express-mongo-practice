const mongoose = require('mongoose');
const config = require('./config');

mongoose.connect(config.db).then(() => {
    console.log('database connected successfully')
}).catch((err) => {
    console.log(err.message)
})