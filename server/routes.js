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
