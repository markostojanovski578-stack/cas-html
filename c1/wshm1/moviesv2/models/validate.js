const { Validator } = require("node-input-validator");

const MovieCreate = {
  title: "required|string",
  director: "required|string",
  year: "required|integer",
  genre: "required|string",
  rating: "required|integer",
  duration: "required|integer",
};

const MovieUpdate = {
  title: "string",
  director: "string",
  year: "integer",
  genre: "string",
  rating: "integer",
  duration: "integer",
};

const validateMovie = async (data, schema) => {
  const validator = new Validator(data, schema);

  const isValid = await validator.check();

  if (!isValid) {
    throw {
      code: 400,
      error: "Invalid movie data!",
    };
  }
};


module.exports = {
  MovieCreate,
  MovieUpdate,
  validateMovie,
};