const Model = require('../models/user');

const HTTP_OK_STATUS = 200;

const findUserById = async (req, res, _next) => {
  const { id } = req.user;

  const userInfo = await Model.findUserById(id);

  res.status(HTTP_OK_STATUS).json({ ...userInfo });
};

module.exports = findUserById;
