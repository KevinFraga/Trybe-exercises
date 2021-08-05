const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const HTTP_UNAUTHORIZED_STATUS = 401;

const auth = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');
    
    err.statusCode = HTTP_UNAUTHORIZED_STATUS;
    
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

module.exports = auth;