const express = require("express");

const{ getAllStudents } = require("./handler.js")
const app = express();

// if(url.pathname ===/students) app get go zamenuva
app.get

const port = 3000
app.listen(port, () =>{
    console.log(`Server startet at port ${port}!`);
})