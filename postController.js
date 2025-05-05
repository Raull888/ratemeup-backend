const { createPost, getAllPosts } = require('../backend/models/Post');

const create = async (req, res) => {
  const { userId, content } = req.body;
  const post = await createPost(userId, content);
  res.json(post);
};

const getPosts = async (req, res) => {
  const posts = await getAllPosts();
  res.json(posts);
};

module.exports = { createPost: create, getPosts };
