const { writeFile, readFile, appendFile } = require ("./read-write.js");

// writeFile() 
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
// .finally(() => console.log("Finished"));

writeFile("student.txt", "Marko Stojanovski")
.then(console.log)
.catch(console.log)

readFile("student.txt")
.then(console.log)
.catch(console.log)


// appendFile("student.txt", "\nBojan Petrov")
//   .then(console.log)
//   .catch(console.log);


// const run = async () => {
//   try {
//     const result = await appendFile ("student.txt","\nMartin Ristov");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// run();
