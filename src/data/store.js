let columns = {
  posts: [],
  comments: []
};

let PostsNextId = 1;
let CommentsNextId = 1;

function FindElement(dataName, id) {
  let left = 0;
  let right = columns[dataName].length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (columns[dataName][mid].id == id) return mid;
    if (columns[dataName][mid].id < id) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

exports.getAll = (dataName) => columns[dataName];

exports.getOne = (dataName, id) => {
  const targetid = FindElement(dataName, id);
  if (targetid >= 0) {
    return columns[dataName][targetid];
  } else {
    return `This ${dataName} doesn't exist`;
  }
};

exports.addPost = data => {
  const post = { id: PostsNextId++, ...data };
  columns.posts.push(post);
  return post;
};

exports.addComment = (postId, data) => {
  const comment = { id: CommentsNextId++, postId, ...data };
  columns.comments.push(comment);
  return comment;
};

exports.delete = (dataName, id) => {
  return columns[dataName].splice(id - 1, 1);
};

exports.updatePost = (id, data) => {
  const targetid = FindElement("posts", id);
  if (targetid >= 0) {
    [columns.posts[targetid].title, columns.posts[targetid].body] = [data.title, data.body];
    return columns.posts[targetid];
  } else {
    return "This post doesn't exist";
  }
};

exports.updateComment = (id, data) => {
  const targetid = FindElement("comments", id);
  if (targetid >= 0) {
    columns.comments[targetid].body = data.body;
    return columns.comments[targetid];
  } else {
    return "This post doesn't exist";
  }
};
