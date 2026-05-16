const {read, write} = require("../read-write.js")



const createVehicle = async (req, res) => {
    try {
      const vehicles = await read("data.json")
      vehicles.push(req.body);
      await write(vehicles);

      return res.status(200).send(vehicles);
    } catch(err) {
        return res.status(500).send("Internal server error")
    }
}

const getVehicles = async (req, res) => {
    try {
        const vehicles = await read("data.json");

        return res.status(200).send(vehicles);
    } catch (err) {
        return res.status(500).send("Internal server error")
    }
}

const updateVehicle = async (req, res) => {
    try {
        const vehicles = await read("data.json");
        const i = req.params.index

        if(!vehicles[i]) return res.status(404).send("Not found");

        vehicles[i] = req.body;
        await write("data.json", vehicles);
        res.send(vehicles);
    } catch(err) {
        return res.status(500).send("Internal server error")
    }
}

const removeVehicle = async (req,res) => {
    try {
        const vehicles = await read("data.json");
        const i = req.params.index;

        if(!vehicles[i]) return res.status(404).send("Not Found")

         vehicles.splice(i, 1);
         await write("data.json", vehicles);
         res.send(vehicles);

    }  catch(err) {
        return res.status(500).send("Internal server error")
    }
}

module.exports = {}