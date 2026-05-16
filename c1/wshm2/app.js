const express = require("express");
const connectDB = require("./pkg/db/config");
const { login, register } = require("./handlers/auth");

const app = express();

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("API is working");
});

app.post("/auth/register", register);
app.post("/auth/login", login);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});