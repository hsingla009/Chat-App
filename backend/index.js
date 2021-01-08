const express = require("express");
const config = require("./config/app");
const app = express();
const mongoose = require("mongoose");
const router = require("./router/index");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);
const port = config.appPort;

const uri =
  "mongodb+srv://hsingla009:harshit1234@cluster0.q5idx.mongodb.net/chatAPP?retryWrites=true&w=majority";
mongoose.connect(uri)
  .then(() => {
    app.listen(port);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
