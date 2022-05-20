// const router = require('express').Router();
// const {
//   User
// } = require('../../db/models');

// router.put('/:id', async (req, res) => {
//   const {
//     id
//   } = req.params;
//   const {
//     username,
//     email
//   } = req.body;

//   const updatedUser = await User.update({
//     username,
//     email
//   }, {
//     where: {
//       id
//     },
//     returning: true,
//     raw: true
//   });

//   const [, [newSession]] = updatedUser;
//   req.session.user = newSession;
//   res.json({
//     updated: true,
//     message: '/lk'
//   });
// });

// module.exports = router;
