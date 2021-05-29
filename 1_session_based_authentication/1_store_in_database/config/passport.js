const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db").models.User;

const { validatePassword } = require("../utils/utils");

const strategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  (username, password, done) => {
    User.findOne({
      username,
    })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        const isValid = validatePassword(password, user.hash, user.salt);
        if (isValid) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        return done(err);
      });
  }
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
