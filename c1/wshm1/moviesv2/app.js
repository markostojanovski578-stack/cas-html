const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const express = require("express");
const connectDb = require("./db/config");

const {
  createMovie,
  updateMovie,
  removeMovie,
  getMovies,
} = require("./controllers/movieController");

const {register,login} = require("./handlers/auth");

const auth = require("./middleware/auth")

connectDb();

const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.get("/movies",auth, getMovies);
app.post("/movies",auth, createMovie);
app.put("/movies/:id",auth, updateMovie);
app.delete("/movies/:id",auth, removeMovie);

app.listen(3000, () => { console.log("Server started!");});