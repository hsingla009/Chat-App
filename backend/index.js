const express = require("express");
const config = require("./config/app");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/index");
const bodyParser = require("body-parser");
const mongodbKey = require('./apiKeys').mongoKey;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);
const port = config.appPort;

const uri =mongodbKey;
mongoose.connect(uri)
  .then(() => {
    app.listen(port);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
