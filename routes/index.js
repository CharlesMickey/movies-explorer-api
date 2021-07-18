const router = require('express').Router();
const routesUsers = require('./users');
const routesMovie = require('./movies');
const nonExistentRoute = require('./nonExistentRoute');
const { createUser, login } = require('../controllers/user');
const { ERROR_MSG } = require('../utils/constants');

const {
  validateUserCreateBody,
  validateUserAuthorization,
} = require('../middlewares/validations');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(ERROR_MSG.CRASH_TEST);
  }, 0);
});

router.post('/signin', validateUserAuthorization, login);
router.post('/signup', validateUserCreateBody, createUser);

router.use('/users', routesUsers);
router.use('/movies', routesMovie);
router.use('*', nonExistentRoute);

module.exports = router;

