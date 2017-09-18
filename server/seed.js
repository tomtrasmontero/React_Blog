const db = require('./db').models;

const createUser = () => {
  const userData = {
    name: 'blog foo',
    password: 'blog bar',
    isAdmin: true,
  };

  return userData;
};

const createBlog = () => {
  const blogData = {
    title: 'test blog title',
    body: 'test blog body',
    userId: 1,
  };

  return blogData;
};

const createComment = () => {
  const userComment = {
    userId: 1,
    userName: 'blog foo',
    blogId: 1,
    comment: 'comment foo',
  };

  return userComment;
};

const seed = () => {
  const seedUserData = db.User.create(createUser());
  const seedBlogData = db.Blog.create(createBlog());
  const seedCommentData = db.Comment.create(createComment());

  return Promise.all([
    seedUserData,
    seedBlogData,
    seedCommentData,
  ]);
};

module.exports = {
  seed,
};
