const app = require('express').Router();

module.exports = app;

app.get('/blogs', (req, res, next) => {
  res.send('hello from api');
});
