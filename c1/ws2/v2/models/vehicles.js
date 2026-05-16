const mongoose = require("mongoose");

const vehicleSchema = {
    type: {
        type: String,
        enum: ["car", "truck", "motorcycle"]
    },
    bodytype: {
        type: String,
        default: "",
        enum: ["","",""]
    }
    brand: String,
    model: String,
    year: Number,
    mileage: Number,
    color: String,
    fuelType: {
        type: String,
        enum: ["diesel", "petrol","electric","hybrid"],

    },
    transmission: {
        type:String,
        enum: ["automatic","Semi-automatic","manual"],
    },
    {timestamps: true},
};


const create = async(data) => {
    const newVehicle = new Vehicle(data);
    return await newVehicle.save();
};

// get by brand

// get by year




const get = async() => {
    return await Vehicle.find();
};


const update = async(_id, data) => {
    return await Vehicle.updateOne({_id}, data);
}

const remove async (_id) => {
  return await Vehicle.deleteOne(_id)
};