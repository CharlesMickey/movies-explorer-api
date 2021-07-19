const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { PORT, MONGO_URL } = require('./config');
const routerAll = require('./routes/index');
const handleErrors = require('./errors/handleErrors');
const limiter = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(cookieParser());
app.use(requestLogger);
app.use(limiter);
app.use(routerAll);
app.use(errorLogger);
app.use(errors()); // обработчик ошибок celebrate
app.use(handleErrors);

app.listen(PORT, console.log('Бубуся Дорогуся', PORT));
