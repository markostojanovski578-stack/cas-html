const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Account = mongoose.model("Account", accountSchema,"accounts");

const createAccount = async(data) => {
    const acc = new Account(data);
    return await acc.save();
};

const getByEmail = async(email) => {
    return await Account.findOne({ email });
};

const getAll = async() => {
    return await Account.find();
};

module.exports = {
    createAccount,
    getByEmail,
    getAll,
};