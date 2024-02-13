require('dotenv').config();


const config = {
    port: process.env.PORT || 5000,
    db: process.env.DB
}


module.exports = config;