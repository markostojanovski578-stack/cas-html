
// const fs = require("fs");

// fs.writeFile("data.txt", "Hello from Node", (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File Written");
//     };
// });

const fs = require("fs");

// const writeFile = () => {
//     return new Promise ((resolve, reject) =>{
//         fs.writeFile("data.txt", "Semos Education", (err) => {
//             if (err) reject(err);
//             else resolve ("Success");
//         }) 
//     })
// }

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) reject(err);
      else resolve("Success");
    });
  });
};


const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};


const appendFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(fileName, data, (err) => {
      if (err) reject(err);
      else resolve("Appended successfully");
    });
  });
};

module.exports = { writeFile, readFile, appendFile };