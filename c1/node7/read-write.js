const fs = require("fs");

// CRUD - Create Read Update Delete
// HTTP - POST GET PUT DELETE

// JSON.stringify - JS object to JSON object/string
// JSON.parse - JSON to JS object

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      // JSON data
      if (err) reject(err);
      data = JSON.parse(data);
      resolve(data);
    });
  });
};

// data is JS object
const write = (data) => {
  // {ime: "Admin", prezime: "Test", godina: 2100}
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data);

    fs.writeFile("data.json", data, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = {
  read,
  write,
};