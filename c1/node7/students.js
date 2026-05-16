const { read, write } = require("./read-write");

// CRUD

// Read
const getStudents = () => {
  return read();
};

// Create
const addStudent = async (studentData) => {
  let students = await read();
  //students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //   ];
  students.push(studentData);

  //   students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //.    { ime: "Test", prezime: "test", godina: 2000 }
  //   ];

  await write(students);
};

const deleteStudent = async (studentIndex) => {
    let students = await read();
    students = students.filter((student, index) => index !== studentIndex);
    // Prva iteracija
    // 0 !== 1 e tochno sto znaci zacuvaj go vooj student t.e Vangel
    // 1 !== 1 e false, otfrli go ovoj student t.e Pero.
    await write(students);
    
};


const editStudent = async(studentIndex, studentData) => {
   let students = await read();
//    students = students.map((student, index) => {
//     return student.ime;
//    }); 

students = students.map((student, index) => {
    if(index === studentIndex) {
        // Prva iteracija
    // 0 === 1 false  skokni go vangel
    //Vtora iteracija
    // 1 === 1 true, izmeni gi podatocite za pero

    // promeni gi podatocite
    return {
        ...student, /// ... zemaat prethodni informacii
        ...studentData,
        // godina: studentData.godina // 2000
        // unvierzitet: studentData.univerzitet // FINKI
    }

    }
})
};

module.exports = {
  getStudents,
  addStudent,
};