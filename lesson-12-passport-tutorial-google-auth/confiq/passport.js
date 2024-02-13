require("dotenv").config();
const User = require("../models/user.model");
const passport = require("passport");
const bcrypt = require("bcrypt");

const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:5000/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, cb) {
            User.findOne({ googleId: profile.id })
                .then(user => {
                    if (!user) {
                        // If user not found, create a new user
                        let newUser = new User({
                            googleId: profile.id,
                            username: profile.displayName,
                        });
                        return newUser.save();
                    } else {
                        // If user found, return user
                        return user;
                    }
                })
                .then(user => {
                    // Pass the user to the callback function
                    return cb(null, user);
                })
                .catch(err => {
                    // Handle any errors
                    return cb(err, null);
                });
        }
    )
);

// create session id
// whenever we login it creares user id inside session
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// find session info using session id
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, false);
    }
});