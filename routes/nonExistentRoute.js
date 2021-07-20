const router = require('express').Router();
const NotFoundError = require('../errors/not-found-err');
const { ERROR_MSG } = require('../utils/constants');

router.all('*', () => {
  throw new NotFoundError(ERROR_MSG.PATH_NOT_FOUND);
});

module.exports = router;
