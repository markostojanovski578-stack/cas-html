const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: String,
    director: String,
    year: Number,
    genre: {
      type: String,
      enum: ["action", "drama", "comedy", "sci-fi", "romance"],
    },
    rating: Number,
    duration: Number,

    createdBy: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Account",
    }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema, "movies");

const create = async(data) => {
    const newMovie = new Movie(data);
    return await newMovie.save();
} ;

const getByUser = async(_id) => {
  return await Movie.find({createdBy: userId});
}

const getSingle = async(_id) => {
  return await Movie.findOne({_id});
}

const update = async (_id, data) => {
  return await Movie.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await Movie.deleteOne({ _id });
};

module.exports = { create, getByUser,getSingle, update, remove };