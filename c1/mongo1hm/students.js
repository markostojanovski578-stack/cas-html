const mongoose = require("mongoose");


// arhitekturata/blueprintot na student dokumentot vo mongodb
const studentSchema = new mongoose.Schema({
    ime: String,
    prezime: String,
    prosek: Number,
    grad: String,
    godini: Number,
    fakultet: String,
    nasoka: String,
    predmeti: [String],
    stipendija: Boolean,
});

// Ova kreira kontroler sho se vika StudentModel i raboti so kolekcijata "students" koristejki ja studentSchema strukturata

const StudentModel = mongoose.model("Student", studentSchema, "students")

module.exports = StudentModel;
