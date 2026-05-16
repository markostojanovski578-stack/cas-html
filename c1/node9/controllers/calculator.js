const fs = require("fs");


const getCalculator = async (req, res) => {
  try {
    const calculator = await parseTemplate("calculator-form");
    return res.status(200).send(calculator);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
};


const postCalculator = async (req, res) => {
  try {
    const { numberOne, numberTwo, operation } = req.body;

    if (numberOne === "" || numberTwo === "") {
      return res.status(400).send("Bad request");
    }

    let result = "";

    switch (operation) {
      case "sobiranje":
        result = `${Number(numberOne) + Number(numberTwo)}`;
        break;
      case "odzemanje":
        result = `${Number(numberOne) - Number(numberTwo)}`;
        break;
      case "mnozenje":
        result = `${Number(numberOne) * Number(numberTwo)}`;
        break;
      case "delenje":
        result = `${Number(numberOne) / Number(numberTwo)}`;      
        break;

      default:
        result = "Nepoznata operacija";
    }

    const output = await parseTemplate("calculator", {
      data: result,
      ime: "Semos Education",
    });

    return res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
};


const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    const path = `${__dirname}/../views/${template}.html`;
    fs.readFile(path, "utf-8", (err, content) => {
      if (err) reject(err);

      if (data) {
        for (const key in data) {
          content = content.replace(`{{${key}}}`, data[key]);
        }
      }

      resolve(content);
    });
  });
};

module.exports = {
  getCalculator,
  postCalculator,
};