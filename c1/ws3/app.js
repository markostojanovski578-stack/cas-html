const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const express = require("express");

const app = express()

require("./db/config")

app.use(express.json());

app.get("/accounts", getAllAccounts);
app.post("/accounts", createNewAccount);
app.put("/accounts/:id", updateCurrentAccount);
app.delete("/accounts/:id", removeCurrentAccount);

app.listen(3000, () => { console.log("Server started!");});