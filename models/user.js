const mongoose = require('mongoose');
const { isEmail } = require('validator');
const { USER_SCHEMA_MSG } = require('../utils/constants');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, USER_SCHEMA_MSG.NAME],
    minlength: [2, USER_SCHEMA_MSG.NAME],
    maxlength: [30, USER_SCHEMA_MSG.NAME],
  },
  email: {
    type: String,
    required: [true, USER_SCHEMA_MSG.EMAIL.FILLING_ERROR],
    validate: {
      validator: (v) => isEmail(v),
      message: USER_SCHEMA_MSG.EMAIL.ERROR_MSG,
    },
    unique: [true, USER_SCHEMA_MSG.EMAIL.ERROR_MSG],
  },
  password: {
    type: String,
    required: [true, USER_SCHEMA_MSG.PASSWORD],
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);
