const router = require('express').Router();
const {
  Question,
} = require('../../db/models');

router.get('/questions', async (req, res) => {
  const allQuestion = await Question.findAll({
    raw: true
  });
 

   res.json(allQuestion)
});

module.exports = router;
