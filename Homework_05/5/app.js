const express = require('express');
const mustache = require('mustache-express');
const regRouter = require('./routes/registration');

const app = express();

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', `${__dirname}/views`);
app.use(express.urlencoded({ extended: true }));
app.use(regRouter);
app.use(express.static('public'));

app.listen(80, () => {
  console.log('Сервер запущен!');
});
