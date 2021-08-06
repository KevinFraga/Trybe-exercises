const jwt = require('jsonwebtoken');
const joi = require('joi');

const Model = require('../models/user');

const secret = process.env.JWT_SECRET;

const HTTP_OK_STATUS = 200;
const HTTP_UNAUTHORIZED_STATUS = 401;

const bodyValidator = (body) => joi.object({
  username: joi.string().min(5).alphanum().required(),
  password: joi.string().min(5).required(),
}).validate(body);

const login = async (req, res, next) => {
  const { error } = bodyValidator(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const user = await Model.findUser(username);

  if (!user || user.password !== password) {
    const err = new Error('Usuário não existe ou senha inválida');

    err.statusCode = HTTP_UNAUTHORIZED_STATUS;

    return next(err);
  }

  const jwtConfig = {
    expiresIn: '1h',
  };

  const payload = {
    id: user._id,
    username,
  };

  const token = jwt.sign(payload, secret, jwtConfig);

  res.status(HTTP_OK_STATUS).send({ message: 'Login efetuado com sucesso', token });
};

module.exports = login;
