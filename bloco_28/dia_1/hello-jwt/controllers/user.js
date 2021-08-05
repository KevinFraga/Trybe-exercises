const HTTP_OK_STATUS = 200;

const user = (req, res, _next) => {
  const { username, admin } = req.user;

  res.status(HTTP_OK_STATUS).json({ username, admin });
};

module.exports = user;
