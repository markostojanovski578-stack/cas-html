const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({

})

const StudentModel = mongoose.model("Student", studentSchema, "students");

module.exports = StudentModel