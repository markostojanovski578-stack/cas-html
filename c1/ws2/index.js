const express = require("express");

const app = expres();

app.use(expres.json());

app.get("/vehicles", getVehicles);
app.post("/vehicles", createVehicle);
app.put("/vehicles/:index", updateVehicle);
app.delete("/vehicles/:index", removeVehicle);



app.listen(3000, () => console.log("Server started at port 3000!"));