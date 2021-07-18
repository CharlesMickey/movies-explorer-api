const { celebrate, Joi } = require('celebrate');
const { isURL, isEmail } = require('validator');
const { USER_SCHEMA_MSG, MOVIE_SCHEMA_MSG } = require('../utils/constants');

const validateUserPatchBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': USER_SCHEMA_MSG.NAME,
        'string.max': USER_SCHEMA_MSG.NAME,
        'string.required': USER_SCHEMA_MSG.NAME,
      }),
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isEmail(value)) {
          return value;
        }
        return helpers.message(USER_SCHEMA_MSG.EMAIL.ERROR_MSG);
      })
      .messages({
        'string.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
        'any.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
        'string.base': USER_SCHEMA_MSG.EMAIL.ERROR_MSG,
      }),
  }),
});

const validateUserCreateBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.min': USER_SCHEMA_MSG.NAME,
        'string.max': USER_SCHEMA_MSG.NAME,
        'string.required': USER_SCHEMA_MSG.NAME,
      }),
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isEmail(value)) {
          return value;
        }
        return helpers.message(USER_SCHEMA_MSG.EMAIL.ERROR_MSG);
      })
      .messages({
        'string.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
        'any.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
        'string.base': USER_SCHEMA_MSG.EMAIL.ERROR_MSG,
      }),
    password: Joi.string().required().min(8)
      .messages({
        'string.min': USER_SCHEMA_MSG.PASSWORD,
        'string.required': USER_SCHEMA_MSG.PASSWORD,
      }),
  }),
});

const validateUserAuthorization = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isEmail(value)) {
          return value;
        }
        return helpers.message(USER_SCHEMA_MSG.EMAIL.ERROR_MSG);
      })
      .messages({
        'string.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
        'any.required': USER_SCHEMA_MSG.EMAIL.FILLING_ERROR,
      }),
    password: Joi.string().required().min(8)
      .messages({
        'string.min': USER_SCHEMA_MSG.PASSWORD,
        'string.required': USER_SCHEMA_MSG.PASSWORD,
      }),
  }),
});

const validateCreateMovieBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.COUNTRY,
      }),
    director: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.DIRECTOR,
      }),
    duration: Joi.number().required()
      .messages({
        'number.required': MOVIE_SCHEMA_MSG.DURATION,
      }),
    year: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.YEAR,
      }),
    description: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.DESCRIPTION,
      }),
    image: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(MOVIE_SCHEMA_MSG.IMAGE);
      })
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.ERROR_URL,
      }),
    trailer: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(MOVIE_SCHEMA_MSG.TRAILER);
      })
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.ERROR_URL,
      }),
    thumbnail: Joi.string()
      .required()
      .custom((value, helpers) => {
        if (isURL(value)) {
          return value;
        }
        return helpers.message(MOVIE_SCHEMA_MSG.THUMBNAIL);
      })
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.ERROR_URL,
      }),
    movieId: Joi.number().required()
      .messages({
        'number.required': MOVIE_SCHEMA_MSG.MOVIE_ID,
      }),
    nameRU: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.NAME_RU,
      }),
    nameEN: Joi.string().required()
      .messages({
        'string.required': MOVIE_SCHEMA_MSG.NAME_EN,
      }),
  }),
});

const validateDeleteMovieParams = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required()
      .messages({
        'number.required': MOVIE_SCHEMA_MSG.MOVIE_ID,
      }),
  }),
});

module.exports = {
  validateUserPatchBody,
  validateCreateMovieBody,
  validateDeleteMovieParams,
  validateUserCreateBody,
  validateUserAuthorization,
};
