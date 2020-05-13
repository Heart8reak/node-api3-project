const express = require('express');
const postsRouter = require('./posts/postRouter')

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

server.use('/api/posts', postsRouter)

//custom middleware

function logger(req, res, next) {
  const method = req.method
  const endpoint = req.originalUrl

  console.log(`${method} to ${endpoint}`)

  next()
}

server.use(logger)

module.exports = server;
