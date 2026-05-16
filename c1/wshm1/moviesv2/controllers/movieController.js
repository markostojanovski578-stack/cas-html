const { create, getByUser, getSingle, update, remove} = require("../models/movie");
const {  validateMovie,  MovieCreate,  MovieUpdate,} = require("../models/validate");

const createMovie = async(req,res) => {
    try {
      await validateMovie(req.body, MovieCreate);  
      
      const data ={
        ...req.body,
        createdBy: req.auth.id,
      }

      const newMovie = await create(data);

        return res.status(200).send(newMovie);
    } catch (err) {
  console.log(err);
  const statusCode = err.code || 500  
  return res.status(statusCode).send(err.message);
}
};

const getMovies = async (req, res) => {
  try {
    const movies = await getByUser(req.auth.id);
    return res.status(200).send(movies);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err.message);
  }
};

const updateMovie = async(req, res) => {
    try {
      await validateMovie(req.body, MovieUpdate);   

        const movie = await getSingle(req.params.id);

        if(!movie) {
          return res.status(404).send("Movie not found!");
        }
        if (movie.createdBy.toString() !== req.auth.id.toString()) {
          return res.status(400).send("You are not the owner");
        }

        const updatedMovie = await update(req.params.id, req.body);

        return res.status(200).send(updatedMovie);
    } catch (err) {
  console.log(err);
  return res.status(500).send(err.message);
}
};


const removeMovie = async (req, res) => {
  try {
    const movie = await getSingle(req.params.id);

    if(!movie) {
      return res.status(404).send("Movie not found!");
    }

    if (movie.createdBy.toString() !== req.auth.id.toString()) {
      return res.status(400).send("You are not the owner!");
    }

    const deletedMovie = await remove(req.params.id);
    
    return res.status(200).send(deletedMovie);
  } catch (err) {
  console.log(err);
  return res.status(500).send(err.message);
}
};

module.exports = {
  createMovie,
  getMovies,
  updateMovie,
  removeMovie,
};