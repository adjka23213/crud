const store = require("../data/store");

exports.getAll = (req, res) => {
  res.json(store.getAll("comments"));
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  res.status(200).json(store.getOne("comments", id));
};

exports.create = (req, res) => {
  const postId = Number(req.params.id);
  const post = store.addComment(req.body);
  res.status(201).json(comment);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  res.status(200).json(store.delete("comments", id));
};

exports.update = (req, res) => {
  const post = store.updateComment(req.params.id, req.body);
  res.status(200).json(post);
};
