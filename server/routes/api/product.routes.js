const router = require('express').Router();
const {
  Product,
} = require('../../db/models');

router.post('/newProduct', async (req, res) => {
  try {
    const {
      title,
      describe,
      condition,
      start_at,
      end_at
    } = req.body;

    const product = await Product.create({
      title,
      describe,
      condition,
      start_at,
      end_at,
      user_id: req.session.user.id
    });
    res.json(product);
  } catch {
    res.status(401).json({
      text: 'Заполните все поля',
    });
  }
});

router.delete('/delete/:id', async (req, res) => {
  const {
    id
  } = req.params;
  await Product.destroy({
    where: {
      id
    }
  });
  res.sendStatus(200);
});

router.put('/change/:id', async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const {
      title,
      describe,
      condition,
      start_at,
      end_at
    } = req.body;
    await Product.update({
      title,
      describe,
      condition,
      start_at,
      end_at
    }, {
      where: {
        id
      },
      returning: true,
      raw: true
    });
    res.json({
      updated: true,
      message: '/main'
    })
  } catch {
    res.status(401).json({
      text: 'Заполните все поля',
    });
  }
});

module.exports = router;
