require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const { PORT, MONGO_URL } = require('./config');
const routerAll = require('./routes/index');
const handleErrors = require('./errors/handleErrors');

const app = express();

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  req.user = {
    _id: '60f2b1afb9b6d649fc6438a7', // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use(routerAll);

app.use(errors()); // обработчик ошибок celebrate
app.use(handleErrors);

app.listen(PORT, console.log('Цыпа Дрипа Дри па па', PORT));
