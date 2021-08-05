const jwt = require('jsonwebtoken');
const joi = require('joi');

const secret = process.env.JWT_SECRET;

const HTTP_OK_STATUS = 200;

const bodyValidator = (body) => joi.object({
  username: joi.string().min(5).alphanum().required(),
  password: joi.string().min(5).required(),
}).validate(body);

const login = (req, res, next) => {
  const { error } = bodyValidator(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const admin = (username === 'admin' && password === 's3nh4S3gur4???');

  const jwtConfig = {
    expiresIn: '1h',
  };

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  res.status(HTTP_OK_STATUS).json({ token });
};

module.exports = login;
