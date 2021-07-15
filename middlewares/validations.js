const { celebrate, Joi } = require('celebrate');
const validator = require('validator');

const validateUserBody = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      
    }),
  }),
});
