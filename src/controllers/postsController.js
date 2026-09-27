const store = require("../data/store");

exports.getAll = (req, res) => {
  res.json(store.getAll("posts"));
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  res.status(200).json(store.getOne("posts", id));
};

exports.create = (req, res) => {
  const post = store.addPost(req.body);
  res.status(201).json(post);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  res.status(200).json(store.delete("posts", id));
};

exports.update = (req, res) => {
  const post = store.updatePost(req.params.id, req.body);
  res.status(200).json(post);
};
