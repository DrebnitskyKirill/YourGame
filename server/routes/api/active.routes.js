const router = require('express').Router();
const {
  Product,
} = require('../../db/models');
router.get('/active', async (req, res) => {

  const product = await Product.findAll({
    raw: true,
    where: {
      condition: true,
    },
  });
  res.render('activeProduct', {
    product,
  });
});

module.exports = router
