const mongoose = require("mongoose");
const { getSection } = require("../config/index");

module.exports = async function connect() {
  const { MONGO_USERNAME, MONGO_PASSWORD } =
    getSection("development");

  const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.mongodb.net/blog-app?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log("DB connection error:", err);
  }
}; 