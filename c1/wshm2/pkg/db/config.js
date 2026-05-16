const mongoose = require("mongoose");

const uri = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;