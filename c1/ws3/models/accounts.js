const mongoose = require("mongoose");

const accountSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const AccountsModel = mongoose.model("Account", accountSchema, "accounts");


//CRUD 
const create = async (data) => {
  const newAccount = new AccountsModel(data);
  return await newAccount.save();
};


const get = async () => {
  return await AccountsModel.find();
};


const update = async (_id, data) => {
  return await AccountsModel.updateOne({ _id }, data);
};


const remove = async (_id) => {
  return await AccountsModel.deleteOne({ _id });
};

module.exports = { 
    create, 
    get, 
    update, 
    remove };