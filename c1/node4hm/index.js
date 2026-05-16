const http = require("http");
const { convertMilesToKm, fahrenheitToCelsius, inchesToMetres, poundsToKilograms } = require("./convert");

const server = http.createServer((req, res) => {

  if (req.method === "POST" && req.url === "/convert") {
    let data = "";
    
    req.on("data", (chunk) => {
       data += chunk; 
      });
    
      req.on("end", () => {
      const parsedData = JSON.parse(data);
      const convertedKilometers = convertMilesToKm(parsedData.miles);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`${parsedData.miles} miles to kilometers: ${convertedKilometers}`);
    });
  } else if (req.method === "POST" && req.url === "/to-celsius") {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      const parsedData = JSON.parse(data);
      const convertedCelsius = fahrenheitToCelsius(parsedData.fahrenheit);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`${parsedData.fahrenheit} Fahrenheit to Celsius: ${convertedCelsius}`);
    });
  } else if (req.method === "POST" && req.url === "/to-metres") {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      const parsedData = JSON.parse(data);
      const convertedMetres = inchesToMetres(parsedData.inches);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`${parsedData.inches} inches to metres: ${convertedMetres}`);
    });
  } else if (req.method === "POST" && req.url === "/to-kilograms") {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      const parsedData = JSON.parse(data);
      const convertedKilograms = poundsToKilograms(parsedData.pounds);
      res.writeHead(200, { "content-type": "text/plain" });
      res.end(`${parsedData.pounds} pounds to kilograms: ${convertedKilograms}`);
    });
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Route not found");
  }

});

server.listen(3000, () => {
  console.log("Server started at port 3000!");
});