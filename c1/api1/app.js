const express = require("express");

const{getSection} = require("./pkg/config/index")
const{getForCity} = require("./handlers/weather");

const app = express();

app.get("/api/weather/:city", getForCity);
app.get("/api/forecast/:lat/:lon", getFiveDayForecast)

app.listen(3000, () => {
    console.log(`Server started at port ${getSection("weather").port}`)
})