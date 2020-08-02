const express = require('express');

const app = express();
const bodyParser = require('body-parser');

app.listen(80);

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static('public'));
app.post('/somepath', (req, res) => {
  console.log(`Параметры POST запроса: ${JSON.stringify(req.body)}`);
  res.send(JSON.stringify(req.body));
});