const mongoose = require("mongoose");

const loginLogSchema = mongoose.Schema({
    email: String,
    success: Boolean,
    ip: String,
    date: {
        type: Date,
        default: Date.now // autosave na timestamp
    },
}); 

const LoginLog = mongoose.model("LoginLog", loginLogSchema,"login_longs");

const createLog = async(data) => {
    const log = new LoginLog(data);
    return await log.save();
};

module.exports = {
  createLog,
};