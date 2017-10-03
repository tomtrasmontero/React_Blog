const app = require('express').Router();
const db = require('./db').models;

module.exports = app;

app.post('/user', (req, res, next) => {
  db.User.create({
    name: req.body.name,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  })
    .then(user => res.send(user))
    .catch(next);
});

app.get('/user/:id', (req, res, next) => {
  db.User.findAll({ where: { id: req.params.id } })
    .then(user => res.send(user))
    .catch(next);
});

// blog routes
app.post('/blog/create', (req, res, next) => {
  db.Blog.create({
    title: req.body.title,
    body: req.body.body,
    userId: req.body.userId,
  })
    .then(blog => res.send(blog))
    .catch(next);
});

app.get('/blog/:id', (req, res, next) => {
  db.Blog.findAll({ where: { id: req.params.id },
    include:
    [{
      model: db.Comment,
    }],
  })
    .then(blog => res.send(blog))
    .catch(next);
});

app.get('/blogs', (req, res, next) => {
  db.Blog.findAll({
    where: {},
    include: [{ model: db.Comment }] })
    .then(blogs => res.send(blogs))
    .catch(next);
});

app.put('/blog/:id', (req, res, next) => {
  db.Blog.update({
    title: req.body.title,
    body: req.body.body,
  }, { where: { id: req.body.id } })
    .then(blog => res.send(blog))
    .catch(next);
});

// comment routes

app.post('/blog/comment', (req, res, next) => {
  db.Comment.create({
    userId: req.body.userId,
    userName: req.body.userName,
    blogId: req.body.blogId,
    comment: req.body.comment,
  })
    .then(comment => res.send(comment))
    .catch(next);
});

app.get('/blog/:blogId/comments', (req, res, next) => {
  db.Comment.findAll({ where: { blogId: req.params.blogId } })
    .then(result => res.send(result))
    .catch(next);
});
