const handleWelcome = (req, res) => {
    res.writeHead(200, { "content-type": "text/plain"});
    res.end("Welcome to our Node.js server");
}

const handleStudent = (req, res) => {
    res.writeHead(200, {"content-type": "text/plain"});
    res.end("Marko Stojanovski");

};

const handleUser = (req, res, username) => {
   
    const usernamePattern = /^[a-zA-Z\d]{3,}$/;

    if (usernamePattern.test(username)) {
         res.writeHead(200, {"content-type": "text/plain"});
         res.end(`Hello ${username}`);
    } else {
        res.writeHead(400, {"content-type": "text/plain"});
        res.end("Invalid username format");
    }
    
};

const handlePerson = (req, res, query) => {
    const imePattern = /^[A-Z][a-zA-Z]*$/;
    const prezimePattern = /^[A-Z][a-zA-Z]*$/;
    const embgPattern = /^\d{17}$/;

    if ( 
        imePattern.test(query.ime) &&
        prezimePattern.test(query.prezime) &&
        embgPattern.test(query.embg)
    ) {
        res.writeHead(200, {"content-type": "text/plain"});
        res.end(`Person: ${query.ime} ${query.prezime} EMBG: ${query.embg}`)
    } else {
        res.writeHead(400, {"content-type": "text/plain"});
        res.end("Invalid person data");
    }

}

const handleNotFound = (req, res) => {
    res.writeHead(404, {"content-type": "text/plain"});
    res.end("Not Found");
};

module.exports = {
    handleWelcome,
    handleStudent,
    handlePerson,
    handleUser,
    handleNotFound
}