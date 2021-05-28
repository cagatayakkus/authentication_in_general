const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { validatePassword } = require("../utils/utils");
const users = require("../db/user");

const strategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  (username, password, done) => {
    const user = users.filter((user) => user.username === username)[0];
    if (!user) {
      return done(null, false);
    }

    const isValid = validatePassword(password, user.hash, user.salt);

    if (isValid) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  }
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  const user = users.filter((user) => user.username === username)[0];
  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});
