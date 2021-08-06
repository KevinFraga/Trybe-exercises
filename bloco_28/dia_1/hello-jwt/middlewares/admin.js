const HTTP_FORBIDDEN_STATUS = 403;

const admin = (req, _res, next) => {
  const { admin } = req.user;

  if (!admin) {
    const err = new Error('Restricted access');
    
    err.statusCode = HTTP_FORBIDDEN_STATUS;
    
    return next(err);
  }

  return next();
};

module.exports = admin;
