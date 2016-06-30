var express = require('express');
var app = express();

app.post('/', (req, res) => {
  console.log("POST success");
  res.send(true);
});

app.get('/get-gan', (req, res) => {
  console.log("GET success");
  res.send("GET GAN")
})

app.listen(3001, function() {
  console.log("Server running...");
});
