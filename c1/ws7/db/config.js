const mongoose = require("mongoose");

const { getSection } = require("../config/index");

const { MONGO_USERNAME, MONGO_PASSWORD } = getSection("development");

const uri = `mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0`

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected!");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connect;

