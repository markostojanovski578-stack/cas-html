const { getStudents, addStudent } = require("./students");

async function main() {
  const studentsBefore = await getStudents();
  console.log(studentsBefore);

  const newStudent = { ime: "Test", prezime: "test", godina: 2000 };

  await addStudent(newStudent);

  const studentsAfter = await getStudents();
  console.log(studentsAfter);
}

main();