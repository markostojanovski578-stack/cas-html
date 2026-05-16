const BlogCreate = {
  title: "required|string|minLength:3|maxLength:100",
  content: "required|string|minLength:5",
};

const BlogUpdate = {
  title: "string|minLength:3|maxLength:100",
  content: "string|minLength:5",
};

module.exports = {
  BlogCreate,
  BlogUpdate,
};
