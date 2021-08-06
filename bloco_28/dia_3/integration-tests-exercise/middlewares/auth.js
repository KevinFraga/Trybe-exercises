const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_UNAUTHORIZED_STATUS = 401;

const auth_jwt = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token não encontrado ou informado');
    
    err.statusCode = HTTP_BAD_REQUEST_STATUS;
    
    return next(err);
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded;

    return next();
  } catch (err) {
    err.statusCode = HTTP_UNAUTHORIZED_STATUS;

    return next(err);
  }
};

const auth_id = (req, _res, next) => {
  const paramId = req.params.userId;
  const tokenId = req.user.id;

  if (paramId !== tokenId) {
    const err = new Error('Acesso negado');
    
    err.statusCode = HTTP_UNAUTHORIZED_STATUS;
    
    return next(err);
  }

  next();
}

module.exports = {
  auth_jwt,
  auth_id,
};