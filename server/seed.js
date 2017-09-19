const db = require('./db').models;

const randNum = () => Math.floor(Math.random() * (50 - 1));

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
    title: `test blog title ${randNum() + 1}`,
    body: `test blog body ${randNum() + 1}`,
    userId: 1,
  };

  return blogData;
};

const createComment = () => {
  const userComment = {
    userId: 1,
    userName: 'blog foo',
    blogId: 1,
    comment: `comment foo ${randNum() + 1}`,
  };

  return userComment;
};

const seed = () => {
  console.log('data seeded');
  const seedUserData = db.User.create(createUser());
  const seedBlogData = db.Blog.create(createBlog());
  const seedBlogData2 = db.Blog.create(createBlog());
  const seedCommentData = db.Comment.create(createComment());

  return Promise.all([
    seedUserData,
    seedBlogData,
    seedBlogData2,
    seedCommentData,
  ]);
};

module.exports = {
  seed,
};
