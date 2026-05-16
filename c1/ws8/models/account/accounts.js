const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  logFail: { type: Number, default: 0 },
  logSuccess: { type: Number, default: 0 },
});

const Account = mongoose.model("Account", accountSchema, "accounts");

const getByEmail = async (email) => {
  return await Account.findOne({ email });
};

const createAccount = async (data) => {
  const acc = new Account(data);
  return await acc.save();
};

const updateAccount = async (id, data) => {
  return await Account.findByIdAndUpdate(id, data, { new: true });
};

module.exports = {
  getByEmail,
  createAccount,
  updateAccount,
};