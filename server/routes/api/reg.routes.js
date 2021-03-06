const router = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User,
} = require('../../db/models');

router.post('/registration', async (req, res) => {
  const {
    name,
    email,
    password,
    password2,
  } = req.body;
  console.log(req.body)
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
      name,
      email,
      password: await bcrypt.hash(password, 10),
    });
    req.session.user = newUser;
    req.session.uid = newUser.id;
   res.json(newUser)
  }
});




module.exports = router;
