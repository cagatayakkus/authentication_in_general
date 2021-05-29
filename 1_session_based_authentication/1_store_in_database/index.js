const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const passport = require("passport");

require("./db");
require("./config/passport");

const MongoStore = require("connect-mongo");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: "bRaH6$mPyXLg/J='",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/session_based_authentication",
      collectionName: "sessions",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
