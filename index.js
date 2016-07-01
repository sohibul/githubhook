var express = require('express');
var exec = require('child_process').exec;
var app = express();

app.post('/post-gan', (req, res) => {
  console.log("POST success");
  var signature = req.get('X-Hub-Signature');
  console.log("signature ", signature);
  console.log("req", req);
  exec('npm run deploy', {cwd: '../dev/'}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
  });

  res.send("POST GAN");
});

app.get('/get-gan', (req, res) => {
  console.log("GET success");
  res.send("GET GAN")
})

app.listen(3001, function() {
  console.log("Server running...");
});
