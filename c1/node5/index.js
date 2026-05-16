
const http = require("http");

const os = require("os");

function testFun() {
    if(true) {
        const test = "test";
        if(True) {
            const testTwo = "testTwo";
        }
    }
}

 // Handler or Controller e funckija koja se spravuva so requestot i responsot
const handler = (req, res) => {
    if(req.url === "/") {
        res.end("Welcome!");
    } 

    // /sobiranje/2/2 - 4
    // /odzemanje/4/2 - 2
    const [_, op, numOne, numTwo] = req.url.split("/");
    // ["", "sobiranje", "2", "2"]\
    const myUrl = req.url.split("/");  
    console.log("My url after split: ",myUrl)

    let result = 0;

    // Zadaca: implementirajte mnozenje i delenje
  // Isprobajte go ova preku localhost url

  

    switch(op) {
        case "sobiranje":
            result = Number(numOne) + Number(numTwo);
            res.end(`${result}`);
            break;
        case "odzemanje":
            result = Number(numOne) - Number(numTwo);
            res.end(`${result}`);
            break;
        case "mnozenje":
            result = Number(numOne) * Number(numTwo);
            res.end(`${result}`);
            break;
        case "delenje":
            if (Number(numTwo) === 0) {
                res.end("Cannot divide by zero!");
                return;
            }
            result = Number(numOne) / Number(numTwo);
            res.end(`${result}`);
            break;
        default:
            res.end("Opreacijata ne e prepoznaena!");
            return;
    }
};

const server = http.createServer(handler);

server.listen(3000, () =>{
    console.log("Server is listening at port 3000");
});

