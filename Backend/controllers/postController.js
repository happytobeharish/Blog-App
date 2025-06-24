const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const post = new Post({ ...req.body, author: req.user.id });
  await post.save();
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username');
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ msg: "Post deleted" });
};
