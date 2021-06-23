const User = require("../models/user");
const bcrypt = require("bcrypt");
const { use } = require("../router");
exports.registerUser = (req, res, next) => {
  console.log("registerUser");
  // console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  console.log(gender);
  let user;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send("user exists");
      } else {
        return bcrypt
          .hash(password, 12)
          .then((hashedPassword) => {
            user = new User({
              name: name,
              email: email,
              gender: gender,
              password: hashedPassword,
            });
            return user.save();
          })

          .then((result) => {
            // console.log(result);
            res.send(result);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
};

exports.login = (req, res, next) => {
  console.log("login user");
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      res.send("user not found");
    } else {
      return bcrypt.compare(password,user.password)
      .then(doMatch =>{
        if(!doMatch){
          res.send("incorrect password ");
        }
        else{
          res.send(user);
        }
      })
      // if (user.password.toString() === password.toString()) {
      //   // delete user.password;
      //   res.send(user);
      // } else {
      //   res.send("pass not found");
      // }
    }
  });
};
