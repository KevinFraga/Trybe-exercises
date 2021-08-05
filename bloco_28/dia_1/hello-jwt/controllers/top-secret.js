const HTTP_OK_STATUS = 200;

const topSecret = (_req, res, _next) => {
  const secretInfo = "Peter Parker é o Homem-Arannha";

  res.status(HTTP_OK_STATUS).json({ secretInfo });
};

module.exports = topSecret;
