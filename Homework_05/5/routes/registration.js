const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Регистрация',
  });
});

router.post('/reg', (req, res) => {
  let data = {
    name: req.body.name,
    password: req.body.pwd,
    email: req.body.email,
  };

  res.render('reg', {
    title: 'Ваши данные',
    name: data.name,
    password: data.password,
    email: data.email,
  });
});

module.exports = router;
