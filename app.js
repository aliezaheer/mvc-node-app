const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("A middleware res.");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware res.");
});

const server = http.createServer(app);

server.listen(3000);
