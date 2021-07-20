const router = require('express').Router();
const { ERROR_MSG } = require('../utils/constants');

router.get('/', () => {
  setTimeout(() => {
    throw new Error(ERROR_MSG.CRASH_TEST);
  }, 100);
});

module.exports = router;
