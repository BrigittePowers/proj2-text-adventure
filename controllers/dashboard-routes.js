const router = require('express').Router();
const { User, Answer } = require('../models');
const withAuth = require('../utils/auth');

// TODO: display data on the player's game info: how many runs, what choices have been made, etc.

/*
router.get("/", withAuth, (req, res) => {
  Answer.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [],
    include: [
      {},
    ],
  })
    .then((dbAnswerData) => {
      const posts = dbAnswerData.map((post) => answer.get({ plain: true }));
      res.render("dashboard", { answers, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
*/

module.exports = router;
