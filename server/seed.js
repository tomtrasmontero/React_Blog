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
    title: `blog title ${randNum() + 1}`,
    body: `blog body ${randNum() + 1} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
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
  const seedCommentData2 = db.Comment.create(createComment());

  return Promise.all([
    seedUserData,
    seedBlogData,
    seedBlogData2,
    seedCommentData,
    seedCommentData2,
  ]);
};

module.exports = {
  seed,
};
