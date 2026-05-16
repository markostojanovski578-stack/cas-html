
const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const express = require("express");

// const connect = require("./db/config")
// connect();

require("./db/config")();

const app = express();
app.use(express.json());
app.post("/users", createUser);
app.get("/users", getAllUsers);
app.put("/users/:id",updateUser);
app.delete("/users:id", deleteUser);



app.listen(3000, () => console.log("Server listening at port 3000"));