const { ERROR_MSG } = require('../utils/constants');

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? ERROR_MSG.SERVER_500 : message,
  });
  next();
};
