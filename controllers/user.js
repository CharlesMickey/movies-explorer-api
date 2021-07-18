const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../config');
const User = require('../models/user');

// const NotFoundError = require('../errors/not-found-err');
const Unauthorized = require('../errors/unauthorized');
const BadRequest = require('../errors/bad-request');
const Conflict = require('../errors/conflict');
const { ERROR_MSG, MSG } = require('../utils/constants');

module.exports.getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.send(user))
    .catch(next);
};

module.exports.updateProfile = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) {
        next(new Conflict(ERROR_MSG.CONFLICT_EMAIL));
      } else if (err.name === 'ValidationError') {
        next(new BadRequest(ERROR_MSG.BAD_REQUEST.PROFILE_UPD));
      }
      return next(err);
    });
};

module.exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.create({ name, email, password: hash })
        .then((user) => res.send({ name, email, _id: user._id }));
    })
    .catch((err) => {
      if (err.name === 'MongoError' && err.code === 11000) {
        next(new Conflict(ERROR_MSG.CONFLICT_EMAIL));
      } else if (err.name === 'ValidationError') {
        next(new BadRequest(ERROR_MSG.BAD_REQUEST.CREATE_USER));
      }
      return next(err);
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .select('+password')
    .then((user) => {
      if (!user) {
        throw new Unauthorized(ERROR_MSG.UNAUTHORIZED);
      }

      return bcrypt.compare(password, user.password).then((matched) => {
        if (!matched) {
          throw new Unauthorized(ERROR_MSG.UNAUTHORIZED);
        }

        const token = jwt.sign(
          { _id: user._id },
          NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
          { expiresIn: '7d' },
        );
        return res
          .cookie('jwt', token, {
            maxAge: 3600000 * 24 * 7,
            httpOnly: true,
            sameSite: true,
          })
          .send({ message: MSG.LOGGED_IN });
      });
    })
    .catch(next);
};

module.exports.signOut = (req, res) => { res.clearCookie('jwt').send({ message: MSG.LOGGED_OUT }); };
