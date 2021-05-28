const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send({ err: "You are not allowed!" });
  }
};

module.exports = { isAuth };
