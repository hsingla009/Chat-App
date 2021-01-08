const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender:{
    type:String,
    // required:true
  },
  avatar:{
      type:String,
  }
});

module.exports = mongoose.model("user", userSchema);
