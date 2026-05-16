const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        default: 20,
        min: 1,
        max: 100,
        validate: {
            validator: (value) => value % 2, // ako godini na korisnikot se paren broj validacijata ke pomine
            message: (props) => `$(props.value) is not an even number!`,

        },
    },
    email: { // nikoj drug nemoze da go ima mejlov sho znaci unique e pravilno upotreben
        type: String,
        unique: true,
        minLength: 10,
        lowercase: true,
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    hobbies: [String],
    address: String,
    city: String,
    
    
})

const User = mongoose.model("User", userSchema, "users");

// create
const create = async(userData) => {};
const newUser = new User(userData);

// read
const getAll = async() => {
    return await User.find();
};
// update
const update = async(id, userData) => {
    return await User.updateOne({_id: id}, userData);
};
// delete
const remove = async() => {
    return await User.deleteOne({_id: id})
};

module.exports = {
    create,
    getAll,
    update,
    remove,
};