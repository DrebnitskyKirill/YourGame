const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User,
} = require('../../db/models');

router.post('/registration', async (req, res) => {
  const {
    username,
    email,
    password,
    password2,
  } = req.body;
  const user = await User.findOne({
    where: {
      email,
    },
  });
  if (user) {
    res.status(401).json({
      text: 'Такой email уже зарегистрирован',
    });
  } else if (password !== password2) {
    res.status(401).json({
      text: 'Пароли не совпадают',
    });
  } else {
    const newUser = await User.create({
      username,
      email,
      password: await bcrypt.hash(password, 10),
    });
    req.session.user = newUser;
    req.session.uid = newUser.id;
    res.redirect('/main');
  }
});

router.post('/login', async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      req.session.uid = user.id;
      req.session.user = user;
      res.redirect('/main');
    } else {
      res.status(304).json({
        text: 'Неверный пароль или логин',
      });
    }
  } catch (error) {
    console.log('error');
  }
});

router.get('/logout', (req, res) => {
  const {
    user
  } = req.session;
  if (user) {
    req.session.destroy();
    res.clearCookie('sid');
    res.redirect('/');
  } else {
    res.redirect('/login');
  }
});

module.exports = router;
