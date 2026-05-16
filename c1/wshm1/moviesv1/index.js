const express = require("express");

const {
  createMovie,
  getMovies,
  updateMovie,
  removeMovie,
} = require("./handlers/movie");

const app = express();

app.use(express.json());