// const http = require("http");

// const {convertMiltesToKm , fahrenheitToCelsius} = require("./convert")

// const server = http.createServer((req, res) => {
//     res.end("Hello World!");
// });


// server.listen(3000, () => {
//     console.log("Server started at port 3000!");
// });

// http://localhost:3000/ - linkot za serverot kreiran

// CRUD - CREATE READ UPDATE DELETE
// HTTP - POST GET PUT DELETE

const server = http.createServer((req, rest) =>{
    //   req.method - HTTP Method
    //   req.url - Ruta kade se naogja resursot


    if (req.method === "POST" && req.url === "/convert") {
        console.log("Conversion");
    } else if (req.method === "POST" && req.url === "/to-celsius") {
        console.log("To celsius");

    } else {
        res.end("I am lost...");
    }
});

server.listen(3000, () => {
    console.log("Server started at port 3000!");
});