var express = require('express');
var bodyParser = require('body-parser');
var exec = require('child_process').exec;
var crypto = require('crypto');
var app = express();

app.use(bodyParser.json()); // for parsing application/json

app.post('/post-gan', (req, res) => {
  console.log("POST success");
  var headers = req.headers;
  var signature = headers['x-hub-signature'];
  var payload = req.body;

  var ref = payload.ref;
  var arr = ref.split("/");
  var branch = arr[arr.length - 1];

  // deploy if both branches in local and server are same
  var script = '' +
  'if [ $(git symbolic-ref --short HEAD) = "' + branch + '" ]; ' +
  'then npm run redeploy; fi';

  exec(script, {cwd: '../hara-ifm/'}, (error, stdout, stderr) => {
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
