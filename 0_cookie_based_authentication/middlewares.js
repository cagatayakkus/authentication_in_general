const auth = (req, res, next, user) => {
  if (req.cookies.username && req.cookies.username === user.username) {
    next();
  } else {
    res.status(401).send({ error: "401 - You are not allowed!" });
  }
};

module.exports = { auth };
