const router = require('express').Router();
const { findAllMovie, createMovie, deleteMovie } = require('../controllers/movie');
const {
  validateCreateMovieBody,
  validateDeleteMovieParams,
} = require('../middlewares/validations');

router.get('/', findAllMovie);
router.post('/', validateCreateMovieBody, createMovie);
router.delete('/:movieId', validateDeleteMovieParams, deleteMovie);

module.exports = router;
