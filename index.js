var express = require('express');
var exec = require('child_process').exec;
var app = express();

app.post('/post-gan', (req, res) => {
  console.log("POST success");
  exec('cd ../dev/ && npm run deploy', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log("exec success");
  });

  res.send(true);
});

app.get('/get-gan', (req, res) => {
  console.log("GET success");
  res.send("GET GAN")
})

app.listen(3001, function() {
  console.log("Server running...");
});
