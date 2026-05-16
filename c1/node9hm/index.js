const express = require("express");

const { getAnaliza, postAnaliza } = require("./controller/analiza");

const app = express(); // incijalizirame express

app.use(express.urlencoded({ extended: true })); // middleware, parsira od string vo objekt

app.get("/analiza", getAnaliza);
app.post("/analiza", postAnaliza);


app.listen(3000, () => {
  console.log("Server is listening at port 3000!");
});