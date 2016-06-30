var express = require('express');
var app = express();

app.use((req, res) => {
  console.log("request", req.url);
});

app.listen(3001, function() {
  console.log("Server running...";
});
