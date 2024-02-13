const loginRoutes = require('../routes/login.route');
const registrationRoutes = require('../routes/register.route');
const routes = [
    {
        path: loginRoutes
    },
    {
        path: registrationRoutes
    }
]


module.exports = routes;