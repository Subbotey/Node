const express = require('express');
const app = express();
const route = require('./routes/registration');

app.listen(80);

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(route);
