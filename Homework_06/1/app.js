const express = require('express');
const mustacheExpress = require('mustache-express');

const app = express();
const widgetRoute = require('./routes/widgets.js');

app.use(express.urlencoded({ extended: true }));
app.set('views', `${__dirname}/views`);
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use('/widgets', widgetRoute);
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Задача:',
  });
});

app.listen(3000);
