const router = require('express').Router();
// const sequelize = require('../config/connection');
const { User, Answer } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
	res.render('dashboard', { logged_in: req.session.logged_in });
});

// router.get("/", withAuth, (req, res) => {
//   Answer.findAll({
//     where: {
//       user_id: req.session.user_id,
//     },
//     attributes: [],
//     include: [
//       {},
//     ],
//   })
//     .then((dbAnswerData) => {
//       const posts = dbAnswerData.map((post) => answer.get({ plain: true }));
//       res.render("dashboard", { answers, loggedIn: true });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
