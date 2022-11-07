const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("A middleware res.");
  next();
});

app.use((req, res, next) => {
  console.log("Second middleware res.");
  res.send("<h1>This is response</h1>");
});

app.listen(3000);
