var express = require('express');
var app = express();

app.post('/', (req, res) => {
  console.log("Post success");
  res.send(true);
});

app.listen(3001, function() {
  console.log("Server running...");
});
