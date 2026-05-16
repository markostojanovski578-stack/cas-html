const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const Account = mongoose.model("Account",accountSchema,"accounts");

const createAccount = async (data) => {
    const newAccount = new Account(data);
    return await newAccount.save();
};

const getByEmail= async(email) => {
    return await Account.findOne({email});
};

module.exports = {
    createAccount,
    getByEmail,
};



