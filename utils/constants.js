const USER_SCHEMA_MSG = {
  NAME: 'Поле "name" - обязательное для заполнения поле - строка от 2 до 30 символов',
  EMAIL: {
    FILLING_ERROR: 'Поле "email" - обязательно для заполнения',
    ERROR_MSG: 'Неправильный формат почты',
  },
  PASSWORD: 'Поле "password" - обязательно для заполнения',
};

const MOVIE_SCHEMA_MSG = {
  COUNTRY: 'Поле "country" - обязательно для заполнения',
  DIRECTOR: 'Поле "director" - обязательно для заполнения',
  DURATION: 'Поле "duration" - обязательно для заполнения',
  YEAR: 'Поле "year" - обязательно для заполнения',
  DESCRIPTION: 'Поле "description" - обязательно для заполнения',
  IMAGE: 'Поле "image" - обязательно для заполнения в формате URL-ссылки',
  TRAILER: 'Поле "trailer" - обязательно для заполнения в формате URL-ссылки',
  THUMBNAIL:
    'Поле "thumbnail" - обязательно для заполнения в формате URL-ссылки',
  MOVIE_ID:
    ' Поле "movieId" - id фильма, который содержится в ответе сервиса MoviesExplorer. Обязательное поле.',
  NAME_RU:
    'Поле "nameRU" название фильма на русском языке - обязательно для заполнения',
  NAME_EN:
    ' Поле "nameEN" название фильма на английском языке - обязательно для заполнения',
  ERROR_URL: 'Неправильный формат URL-ссылки',
};

module.exports = { USER_SCHEMA_MSG, MOVIE_SCHEMA_MSG };
