// const router = require('express').Router();
// const {
//   Product,
// } = require('../../db/models');
// const { sessionChecker } = require('../../middleware/auth');

// router.route('/')
//   .get(sessionChecker, (req, res) => {
//     res.render('home');
//   });

// router.route('/registration')
//   .get(sessionChecker, (req, res) => {
//     res.render('registration');
//   });

// router.route('/login')
//   .get(sessionChecker, (req, res) => {
//     res.render('login');
//   });

// router.get('/main', async (req, res) => {
//   const { user } = req.session;
//   const products = await Product.findAll({
//     where: {
//       user_id: res.locals.uid,
//     },
//     order: [['createdAt', 'DESC']],
//   });
//   res.render('main', {
//     name: user.username,
//     products,
//     uid: user.id,
//   });
// });

// router.get('/lk', async (req, res) => {
//   const { user } = req.session;
//   const products = await Product.findAll({
//     where: {
//       user_id: res.locals.uid,
//     },
//   });
//   res.render('lk', {
//     name: user.username,
//     email: user.email,
//     quantity: products.length,
//     id: user.id,
//   });
// });

// router.get('/newProduct', async (req, res) => {
//   res.render('addProduct', { layout: false });
// });

// router.get('/user/:id', (req, res) => {
//   const { id } = req.params;
//   const { username, email } = req.session.user;
//   res.render('edit', { id, username, email });
// });

// router.get('/change/:id', async (req, res) => {
//   const { id } = req.params;
//   const product = await Product.findOne({ where: { id }, raw: true });
//   res.render('changeProduct', { id: product.id, title: product.title });
// });

// module.exports = router;
