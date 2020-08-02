const { Router } = require('express');
const fs = require('fs');

const router = Router();

router.post('/reg', (req, res) => {
  let data = {
    name: req.body.name,
    password: req.body.pwd,
    email: req.body.email,
  };
  data = `Имя: ${data.name}, Пароль: ${data.password}, Email: ${data.email}`;
  fs.writeFile('user_data.txt', data, (err) => {
    if (err) throw err;
    console.log('Файл с данными сохранён!');
  });
  res.send('Ваши данные успешно отправлены!');
});

module.exports = router;
