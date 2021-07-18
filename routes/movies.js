const router = require('express').Router();
const {
  validateCreateMovieBody,
  validateDeleteMovieParams,
} = require('../middlewares/validations');

router.get('/movies');
router.post('/movies', validateCreateMovieBody);
router.delete('/movies/movieId', validateDeleteMovieParams);

module.exports = router;
