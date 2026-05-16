const dns = require ("node:dns/promises"); 
dns.setServers(["1.1.1.1"]);
const express = require("express");
const fileUpload = require("express-fileupload");
const { expressjwt: jwt } = require("express-jwt");

const connectDB = require("./db/config");
const { getSection } = require("./config/index");

// controllers
const { login, register } = require("./controllers/auth");
const {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
} = require("./controllers/posts");

const {
  upload,
  download,
  listFiles,
  deleteFile,
} = require("./controllers/storage");

const app = express();

// 1. Parse JSON bodies
app.use(express.json());

// 2. File upload middleware
app.use(fileUpload());

// 3. Connect to MongoDB
connectDB();

// 4. JWT middleware (protect routes)
app.use(
  jwt({
    secret: getSection("development").jwt_secret,
    algorithms: ["HS256"],
  }).unless({
    path: ["/auth/login", "/auth/register"],
  })
);

// ---------------- AUTH ROUTES ----------------
app.post("/auth/login", login);
app.post("/auth/register", register);

// ---------------- BLOG ROUTES ----------------
app.get("/posts", getAllPosts);
app.post("/posts", createPost);
app.put("/posts/:id", updatePost);
app.delete("/posts/:id", removePost);

// ---------------- FILE ROUTES ----------------
app.post("/upload", upload);
app.get("/download/:filename", download);
app.get("/files", listFiles);
app.delete("/files/:filename", deleteFile);


app.listen(getSection("development").port, () => {
  console.log(`Server running on port ${getSection("development").port}`);
});