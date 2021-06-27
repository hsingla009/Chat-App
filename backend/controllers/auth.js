const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
exports.registerUser = (req, res, next) => {
  console.log("registerUser");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }
  // console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  // console.log(gender);
  let user;
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.status(404).json({ message: "User exists" });
      } else {
        return bcrypt
          .hash(password, 12)
          .then((hashedPassword) => {
            user = new User({
              avatar:"http://localhost:8080/"+gender.toLowerCase()+".svg",
              name: name,
              email: email,
              gender: gender,
              password: hashedPassword,
            });
            return user.save();
          })

          .then((result) => {
            // console.log(result);
            const temp = { ...result };
            delete temp._doc.password;
            const userWithToken = generateToken(temp._doc);
            return res.send(userWithToken);
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: err.message });
    });
};

exports.login = (req, res, next) => {
  console.log("login user");
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email }).then((user) => {
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      return bcrypt.compare(password, user.password).then((doMatch) => {
        if (!doMatch) {
          return res.status(401).json({ message: "Password is incorrect" });
        } else {
          const temp = { ...user };
          delete temp._doc.password;
          const userWithToken = generateToken(temp._doc);
          return res.send(userWithToken);
        }
      });
      // if (user.password.toString() === password.toString()) {
      //   // delete user.password;
      //   res.send(user);
      // } else {
      //   res.send("pass not found");
      // }
    }
  });
};

const generateToken = (user) => {
  const token = jwt.sign(user, "harshit", { expiresIn: "1h" });
  return { ...user, ...{ token } };
};
