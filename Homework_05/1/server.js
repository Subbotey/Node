const express = require('express');
const app = express();
const route = require('./routes/products');

app.use('/products', route);
app.listen(80);