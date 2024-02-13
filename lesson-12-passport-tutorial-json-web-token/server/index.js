const app = require('./app');
require('dotenv').config();
require('./config/database');
const port = process.env.PORT || 4000




app.listen(port, () => {
    console.log(`port is running at http://localhost:${port}`);
})