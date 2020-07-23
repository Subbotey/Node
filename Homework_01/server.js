// Задача 2.1 из лабораторки


const http = require('http');

const server = http.createServer((request, response) => {
  console.log('HTTP works!');

  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(
    `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Простая страничка</title>
      </head>
      <body>
        <h1>Всем привет</h1>
        <div>Как дела?</div>
      </body>
      </html>
    `);
  response.end();
}).listen(8080);

// Задача 2.2 из лабораторки

/*
const http = require('http');

const server = http.createServer((request, response) => {
  console.log('HTTP works!');

  response.writeHead(404, {
    'Content-Type': 'text/html',
  });
  response.end(`
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404</title>
      </head>
      <body>
        <h1>Всем привет</h1>
        <div>Тут пусто!</div>
      </body>
      </html>
    `);
}).listen(8080);
*/

// Задача 3 из лабораторки

/*
const http = require('http');
const fs = require('fs');

const fileIndex = './html/header.html';
const fileBody = './html/body.html';
const fileFooter = './html/footer.html';

http.createServer((req, res) => {
  fs.readFile(fileIndex, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404</title>
      </head>
      <body>
        <h1>Всем привет, я 404-я</h1>
        <div>Тут пусто!</div>
      </body>
      </html>
      `);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
    }
  });

  fs.readFile(fileBody, 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>404</title>
      </head>
      <body>
        <h1>Всем привет, я 404-я</h1>
        <div>Тут пусто!</div>
      </body>
      </html>
      `);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
}).listen(8080, () => {
  console.log('HTTP Сервер работает на порту 8080\n');
});
*/
