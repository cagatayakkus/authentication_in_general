const express = require("express");
const router = express.Router();
const { decryptPassword } = require("./utils/utils");
const user = require("./db/user/johndoe");
const { auth } = require("./middlewares");

router.get("/", (req, res) => {
  res.send(
    "<h1>Home Page</h1> <br> <h3>You can use following paths to test your logic.</h3><ul><li>GET '/' => Home Route | Not Protected</li><li>POST '/login' => Login Route | Not Protected</li><li>GET '/protected' => Protected Route | Protected</li></ul> <br> <span>USER CREDENTIALS: </span> <br> {'username': 'johndoe', 'password':  'Johndoe98*'}"
  );
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (
    decryptPassword(password, user.hash, user.salt) &&
    user.username === username
  ) {
    res.cookie("username", user.username);
    res.send("You've successfully logged in!");
  } else {
    res.send("Something went wrong during the login process.");
  }
});

router.get(
  "/protected",
  (req, res, next) => auth(req, res, next, user),
  (req, res) => {
    res.send("You are in!");
  }
);

module.exports = router;
