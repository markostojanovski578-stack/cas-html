const {read, write} = require(".../read-write");

const getAllStudents = async(req, res) => {
    const students = await read();
    
    res.status(200).send(students);
};