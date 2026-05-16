const express = require("express");
require("dotenv").config();
const app = express();

const connectDb = require("./db/config");
connectDb();



app.get("/", (req,res)=>{
    return res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
    console.log(`Server started at port: ${process.envPORT}`));