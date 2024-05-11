// jshint esversion:6
const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

let port = process.env.PORT;
if (port == null || port == "") port = 3000;
app.listen(port, function () {
  console.log(`Listening playground server on port ${port}.`);
});
