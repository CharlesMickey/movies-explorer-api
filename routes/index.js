const router = require('express').Router();
const routesUsers = require('./users');
const routesMovie = require('./movies');
const nonExistentRoute = require('./nonExistentRoute');
const crashTest = require('./crashTest');
const { createUser, login } = require('../controllers/user');
const auth = require('../middlewares/auth');

const {
  validateUserCreateBody,
  validateUserAuthorization,
} = require('../middlewares/validations');

router.use('/crash-test', crashTest);
router.post('/signin', validateUserAuthorization, login);
router.post('/signup', validateUserCreateBody, createUser);

router.use(auth);
router.use('/users', routesUsers);
router.use('/movies', routesMovie);
router.use('*', nonExistentRoute);

module.exports = router;
