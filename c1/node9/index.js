const express = require("express");
const { getCalculator, postCalculator } = require("./controllers/calculator"); 


const app = express();


app.use(express.urlencoded({ extended: true }));


app.get("/calculator", getCalculator); 
app.post("/calculator", postCalculator); 


app.listen(3000, () => console.log("Server is listening at port 3000!"));