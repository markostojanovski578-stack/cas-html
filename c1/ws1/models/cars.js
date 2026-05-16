const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
    {
        year: Number,
        mileage: Number,
        color: String,
        fuelType: String,
        body: String,
        transmission: String,
        brand: String,
        model: String,
    },
);

const Car = mongoose.model("Car", carSchema, "cars"); // Imeto na modelot, arhitekturata na dokumentot, imeto na kolekcijata

// Crud

const create = async (carData) => {
    const newCar = new Car(carData);
    return await newCar.save();
};

const getAll = async () => {
    return await Car.find();
};

const getOne= async (id) => {
    return await Car.findOne({_id: id});
}

const update = async (id, carData) => {
    return await Car.updateOne({_id: id}, carData);

};

const remove = async(id) => {
    return await Car.deleteOne({_id:id});
};

module.exports = {
    create,
    getAll,
    getOne,
    update,
    remove,
};