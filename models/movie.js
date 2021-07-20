const mongoose = require('mongoose');
const { isURL } = require('validator');
const { MOVIE_SCHEMA_MSG } = require('../utils/constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, MOVIE_SCHEMA_MSG.COUNTRY],
  },
  director: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.DIRECTOR],
  },
  duration: {
    type: Number,
    require: [true, MOVIE_SCHEMA_MSG.DURATION],
  },
  year: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.YEAR],
  },
  description: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.DESCRIPTION],
  },
  image: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.IMAGE],
    validate: {
      validator: (v) => isURL(v),
      message: MOVIE_SCHEMA_MSG.ERROR_URL,
    },
  },
  trailer: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.TRAILER],
    validate: {
      validator: (v) => isURL(v),
      message: MOVIE_SCHEMA_MSG.ERROR_URL,
    },
  },
  thumbnail: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.THUMBNAIL],
    validate: {
      validator: (v) => isURL(v),
      message: MOVIE_SCHEMA_MSG.ERROR_URL,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    require: true,
  },
  movieId: {
    type: Number,
    require: [true, MOVIE_SCHEMA_MSG.MOVIE_ID],
  },
  nameRU: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.NAME_RU],
  },
  nameEN: {
    type: String,
    require: [true, MOVIE_SCHEMA_MSG.NAME_EN],
  },
});

module.exports = mongoose.model('movie', movieSchema);
