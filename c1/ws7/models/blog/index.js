const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  createdBy: {
    immutable: true,
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Account",
  },
});

const Post = mongoose.model("Post", postSchema, "posts");

const getAllByUser = async (createdBy) => {
  return await Post.find({ createdBy }).populate({
    path: "createdBy",
    select: "username",
  });
};

const getSingle = async (_id) => {
  return await Post.findOne({ _id });
};

const create = async (data) => {
  const newPost = new Post(data);
  return await newPost.save();
};

const update = async (_id, data) => {
  return await Post.updateOne({ _id }, data);
};

const remove = async (_id) => {
  return await Post.deleteOne({ _id });
};

module.exports = {
  getAllByUser,
  getSingle,
  create,
  update,
  remove,
};