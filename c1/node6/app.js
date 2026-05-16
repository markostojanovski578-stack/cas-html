// Инфраструктурен код

const http = require("http");
const url = require ("url")
const handler = require("./handler/handler");


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    // http://localhost:3000/user?username=Marko1


// Napravete handler koj ke go napishe vaseto ime koa ke dopreme do /student
    if (parsedUrl.pathname === "/welcome") {
         handler.handleWelcome(req, res);
    }else if (parsedUrl.pathname === "/student") { 
        handler.handleStudent(req, res);
    } else if (parsedUrl.pathname === "/user") { 
        handler.handleUser(req, res, parsedUrl.query.username);
    } else {
        handler.handleNotFound(req, res,);
    }
});

server.listen(3000, () => console.log("Server started at port 3000"));



