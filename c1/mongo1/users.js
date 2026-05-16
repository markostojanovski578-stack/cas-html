const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    hobbies: [String],
    address: {
        street: String,
        city: String,
    },
});

const UserModel = mongoose.model("User", userSchema,"users");

module.exports = UserModel;