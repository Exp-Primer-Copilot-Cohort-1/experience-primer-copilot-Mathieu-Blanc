// Create web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const comments = [];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});