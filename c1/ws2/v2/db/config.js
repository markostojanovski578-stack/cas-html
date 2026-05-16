const mongoose = require("mongoose");

const URI = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0"

async function connectDb () => {
    try {
        await mongoose.connect(URI)
        console.log("Connection successful")
    } catch(err) {
        console.log(err)
    }
};