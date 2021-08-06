const HTTP_OK_STATUS = 200;
const HTTP_FORBIDDEN_STATUS = 403;
const HTTP_CONFLICT_STATUS = 409;

const upload = (req, res, next) => {
  if (req.fileExtensionError) {
    const err = new Error("Extension must be `png`");

    err.statusCode = HTTP_FORBIDDEN_STATUS;

    return next(err);
  }

  if (req.fileDuplicated) {
    const err = new Error("File already exists");

    err.statusCode = HTTP_CONFLICT_STATUS;

    return next(err);
  }

  res.status(HTTP_OK_STATUS).json({ file: req.file });
};

module.exports = upload;
