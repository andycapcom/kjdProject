const path = require("path");
//const request = require('request');
const axios = require('axios');
const express = require("express");
const app = express(); // create express app
const cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

/*
app.get("/", (req, res) => {
  res.send("This is from express.js");
});
app.get('/case-studies', function (req, res) {

  var options = { method: 'POST',
   url: 'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/',
   headers:
    {   'Content-Type': 'application/json' },
   body: {},
   json: true
  };

  request(options, function (error, response, body) {
    console.log('request call')
   if (error) throw new Error(error);
  // res.status(200).send(response);
  //console.log("response", response);
  res.json(response.body);
  });
});*/

app.get('/studies', function (req, res) {

  axios.get('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/', {
    headers: {
      'Content-Type': 'application/json',
     },
    body:{}
  }).then((resp) => {
    res.json(resp.data);
   });
});

// start express server on port 3456
app.listen(3456, () => {
  console.log("server started on port 3456");
});
