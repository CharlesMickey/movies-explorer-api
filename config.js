require('dotenv').config();

const {
  JWT_SECRET = 'JWT_SECRET',
  MONGO_URL = 'mongodb://localhost:27017/mestodb',
} = process.env;

module.exports = { JWT_SECRET, MONGO_URL };
