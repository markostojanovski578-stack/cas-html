const express = require("express");

const connect = require("./db/config")

const {
    createVehicle,
    getVehicle,
    updateVehicle,
    removeVehicle,
} = require("./controllers/vehicleController");

const app = express();

app.use(express.json());

app.get("/vehicles", getVehicle);
app.post("/vehicle", createVehicle);
app.put("/vehicle/:id", updateVehicle);
app.delete("/vehicles/:id", removeVehicle);

app.listen(3000, () => console.log("Server started"));