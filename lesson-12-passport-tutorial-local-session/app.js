const app = require('./index.js');
require('dotenv').config();
require('./confiq/database.js');
require('./confiq/passport.js')
const PORT = process.env.PORT || 4000;
const bcrypt = require('bcrypt');
const saltRounds = 10;

const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const ejs = require('ejs');
const cors = require('cors');
const User = require('./models/user.model.js');

app.set("trust proxy", 1);
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGO_URL,
            collectionName: "sessions"
        })
        // cookie: { secure: true },
    })
)

app.use(passport.initialize());
app.use(passport.session());


app.set("view engine", "ejs");

app.use(cors());


app.get('/', (req, res) => {
    res.render("index")
})

app.get('/register', (req, res) => {
    res.render("register")
})

app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        bcrypt.hash(password, saltRounds, async (err, hash) => {
            const user = await User.findOne({ username: username })
            if (user) return res.status(400).send("user already exists")
            const newUser = new User({
                username,
                password: hash
            });
            await newUser.save();
            res.status(201).redirect('/login')
        })


    } catch (error) {
        res.status(500).send(error.message)
    }
})

const checkLogged = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/profile")
    }
    next()
}

app.get('/login', checkLogged, (req, res) => {
    res.render("login")
})
app.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', successRedirect: '/profile' }));

const checkAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login')
}

app.get('/profile', checkAuthenticated, (req, res) => {
    res.render("profile")
})


// logout route:
app.get('/logout', (req, res) => {
    try {
        req.logOut((err) => {
            if (err) {
                return next(err)
            }
            res.redirect("/")
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
})



// unknown route:
app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: "route not found"
    })
})

// server error:
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 500,
        message: 'server broked',
        err
    })
})


app.listen(PORT, () => {
    console.log(`app is listening to port:${PORT}, http://localhost:${PORT}`)
});