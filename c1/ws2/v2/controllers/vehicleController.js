const createVehicle = async(req, res) = {
    try {
       const newVehicle = await create(req.body);
       return res.status(200).send(newVehicle);
    } catch(err) {
        return res.status(500).send("Invalid server error!")
    }
};

const getVehicles = async(req,res) => {
    try {
       const vehicles = await get();
       eturn res.status(200).send(getVehicle);
    
    } catch(err) {
        return res.status(500).send("Invalid server error!")
    }
};

const updateVehicle = async(req, res) => {
    try {
        const vehicleId = req.params.id
        const dataToChange = req.body;


        const updatedVehicle = await(vehicleId, dataToChange);
    } catch(err) {
        return res.status(500).send("Invalid server error!")
    }
};