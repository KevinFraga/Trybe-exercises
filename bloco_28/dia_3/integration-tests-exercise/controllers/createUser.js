const joi = require('joi');

const Model = require('../models/user');

const HTTP_CREATED_STATUS = 201;
const HTTP_INTERNAL_ERROR_STATUS = 500;

const bodyValidator = (body) => joi.object({
  username: joi.string().min(5).alphanum().required(),
  password: joi.string().min(5).required(),
}).validate(body);

const createUser = async (req, res, next) => {
  const { error } = bodyValidator(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const user = await Model.registerUser(username, password);

  if (!user) {
    const err = new Error('Erro ao salvar o usuário no banco');

    err.statusCode = HTTP_INTERNAL_ERROR_STATUS;

    return next(err);
  }

  res.status(HTTP_CREATED_STATUS).json({ message: 'Novo usuário criado com sucesso', username })
};

module.exports = createUser;
