const mongoose = require("mongoose");

const URI = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0"

async function connect() {
  try {
    await mongoose.connect(URI);
    console.log("MongoDB connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connect