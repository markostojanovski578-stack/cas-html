const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        default: 20,
        min: 1,
        max: 100,
        validate: {
            validator: (value) => value % 2 === 0, // ako godinite na korisnikot se paren broj validacijata pominuva
            message: (props) => `${props.value} is not an even number`,

        },
    },
    email: {
        //h.vangel22@gmail - nikoj drug nemozhe da go ima ovoj mejl sho znaci unique e true
        type: String,
        unique: true,
        minLength: 10,
        lowercase: true,
    },
    bestFriend: {
        // Marko (69cec4550a749a71e10bbaa1) ima najdobar prijatel, a toa e Elena (69cec4550a749a71e10bbaa2)
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
    },
    // bestFriend: [{ - kreirame array za povekje bestfriends
    //    type: mongoose.SchemaTypes.ObjectId,
    //     ref: "User",
    // }],
    // cars: [{
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: "Car",
    // }],
    // bankAccount: { // IBAN, SWIFT, TRANSACTION_ID
    //     type: mongoose.SchemaTypes.ObjectId,
    //     ref: "BankAccount"
    // },
    hobbies: [String],
    address: {
        street: String,
        city: String,
    },
});

