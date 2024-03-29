const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});



const User = mongoose.model("User", userSchema);

module.exports = User;