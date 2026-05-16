const http = require("http");
const url = require("url");

const handler = require("./handler");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if(parsedUrl.pathname === "/welcome") {
        handler.handleWelcome(req, res);

    } else if (parsedUrl.pathname === "/student" ) {
        handler.handleStudent(req, res);

    } else if (parsedUrl.pathname === "/user" ) {
        handler.handleUser(req, res, parsedUrl.query.username);

    } else if (parsedUrl.pathname === "/person" ) {
        handler.handlePerson(req, res, parsedUrl.query);
        
    } else {
        handler.handleNotFound(req, res);
    }
});

server.listen(3000,() => {
    console.log("Server started on port 3000");
});
