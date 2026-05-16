const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const mongoose = require("mongoose");
const express = require("express");
require("./db/config")();

const app = express();

// Middleware za parsiranje JSON

app.use(express.json());

app.get("/", (req,res) => {
    res.send("Hello World");
});

// Povrzuvanje so MongoDB

const URI = "mongodb+srv://markostojanovski001:marko123123123@cluster0.3bszln3.mongodb.net/?appName=Cluster0"
mongoose.connect(URI)
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err));

app.listen(3000, () => console.log("Server started on port 3000"));
