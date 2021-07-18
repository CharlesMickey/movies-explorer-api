require('dotenv').config();

const {
  NODE_ENV = 'production',
  JWT_SECRET = 'JWT_SECRET',
  MONGO_URL = 'mongodb://localhost:27017/moviesdb',
  PORT = 3000,
} = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  JWT_SECRET,
  MONGO_URL,
};
