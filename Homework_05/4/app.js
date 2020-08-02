const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();

app.set('views', `${__dirname}/views`);
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.get('/', (req, res) => {
  res.render('index', { title: 'First experence with mustache!' });
});

app.listen(80);
