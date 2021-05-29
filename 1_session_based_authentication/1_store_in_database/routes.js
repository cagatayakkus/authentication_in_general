const express = require("express");
const router = express.Router();
const passport = require("passport");
const { isAuth } = require("./middlewares");

router.get("/", (req, res) => {
  res.send(
    "<h1>Home Page</h1> <br> <h3>You can use following paths to test your logic.</h3><ul><li>GET '/' => Home Route | Not Protected</li><li>POST '/login' => Login Route | Not Protected</li><li>GET '/protected' => Protected Route | Protected</li></ul> <br> <span>USER CREDENTIALS: </span> <br> {'username': 'johndoe', 'password':  'Johndoe98*'}"
  );
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/protected",
  })
);

router.get("/protected", isAuth, (req, res) => {
  res.send("You are in!");
});

module.exports = router;
