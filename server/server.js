const express = require('express');

const path = require('path');

const db = require('./db');

const app = express();

const port = process.env.PORT || 3001;

// server up the 'bundled' file !!! and not the client
app.use(express.static(path.join(__dirname, '../build')));

// used for testing purposes
app.use(require('body-parser').json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.use('/api', require('./routes'));

//  any other routes will send error 404
app.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => console.log(`listening on Port:${port}`));

// sync server on start
if (process.env.SYNC) {
  db.sync()
    .then(() => {})
    .catch(err => console.log(err));
}

// for testing
module.exports = app;
