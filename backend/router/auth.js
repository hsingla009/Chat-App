const router = require("express").Router();
const { body } = require("express-validator");
const authController = require("../controllers/auth");
router.post("/login", authController.login);

router.post(
  "/register",
  [
    body("name").notEmpty(),
    body("email").notEmpty(),
    body("gender").notEmpty(),
    body("password").isLength({ min: 5 }),
  ],
  authController.registerUser
);
module.exports = router;
