const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const express = require("express");
const { expressjwt: jwt } = require("express-jwt");

require("./db/config")();

const { getSection } = require("./config/index");


const { login, register } = require("./controllers/auth");


const {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
} = require("./controllers/blog");

const app = express();

app.use(express.json());


app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);


app.post("/auth/login", login);
app.post("/auth/register", register);


app.get("/blog", getAllPosts);
app.post("/blog", createPost);
app.put("/blog/:id", updatePost);
app.delete("/blog/:id", removePost);


app.get("/", (req, res) => {
  res.send("API is working");
});


app.listen(getSection("development").port, () => {
  console.log(
    `Server started at port ${getSection("development").port}`
  );
});