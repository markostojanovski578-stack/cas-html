const { validateSchema } = require(".../helper/validation");

const {
    getAllbyUser,
    update,
    create,
    getSingle,
    remove,
} = require("../models/blog");

const {
    BlogCreate,
    BlogUpdate,
} = require("../models/blog/validate");

const getAllPosts = async(req,res) => {
    try { 
        const userPosts = await getAllbyUser(req.auth.id);
        return res.status(200).send(userPosts);
    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    };
    
};

const createPost = async(req, res) => {
    try {
        await validateSchema(req.body, BlogCreate);

        const data = {
            ...req.body,
            createdBy: req.auth.id,
        };

        const newPost = await create(data);
        return res.status(200).send(newPost);
    }catch(err) {
        console.log(err);
        return res.status(500).send("Invalid server error");
    }
};

const updatePost = async (req, res) => {
  try {
    await validateSchema(req.body, BlogUpdate);

    const checkPost = await getSingle(req.params.id);

    if (!checkPost) {
      return res.status(404).send("Post not found!");
    }

    
    if (checkPost.createdBy.toString() !== req.auth.id.toString()) {
      return res.status(403).send("User is not author of this post!");
    }

    const updatedPost = await update(req.params.id, req.body);
    return res.status(200).send(updatedPost);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid server error");
  }
};

const removePost = async(req, res) => {
    try {
        const checkPost = await getSingle(req.params.id);

        if(!checkPost) {
            return res.status(404).send("Post not found")
        }

        if (checkPost.createdBy.toString() !== req.auth.id.toString()) {
            return res.status(403).send("User is not the author of this post!");

        } 

        const deletedPost = await remove(req.params.id);
        return res.status(200).send(deletedPost);

    } catch(err) {
        console.log(err)
        return res.status(500).send("Invalid server error");
    }
}

module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  removePost,
};