const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../../db/models/user");


router.get('/logout', (req, res) => {
  const {
    user
  } = req.session;
  if (user) {
    req.session.destroy();
    res.clearCookie('sid');
    res.json({message:"!!"})
  } else {
   // res.redirect('/login');
  }
});

module.exports = router;
