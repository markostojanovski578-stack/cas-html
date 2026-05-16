const fs = require("fs");

const read = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + "/data.json", "utf-8", (err, data) => {
      if (err) reject(err);
      resolve(JSON.parse(data));
    });
  });
};

const write = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + "/data.json", JSON.stringify(data), (err) => {
      if (err) reject(err);
      resolve();
    });
  });
};

module.exports = { read, write };