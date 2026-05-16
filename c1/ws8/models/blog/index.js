const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema, "blogs");

module.exports = {
  getAllByUser: (id) => Blog.find({ createdBy: id }),
  getSingle: (id) => Blog.findById(id),
  create: (data) => new Blog(data).save(),
  update: (id, data) =>
    Blog.findByIdAndUpdate(id, data, { new: true }),
  remove: (id) => Blog.findByIdAndDelete(id),
};