const sequelize = require('../config/connection');
const { User, Answer } = require('../models');
const router = require('express').Router();

// test .get
router.get('/', async (req, res) => {
	try {
		const userData = await User.findAll({
			// attributes: { exclude: ['password'] },
			order: [['id', 'ASC']],
		});

		const users = userData.map((project) => project.get({ plain: true }));

		res.render('homepage', {
			users,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

// login
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render('login');
});

// signup
router.get('/signup', (req, res) => {
	res.render('signup');
});

// new game + route to renter title screen
router.get('/newgame', (req, res) => {
	res.render('signup');
});

// continue game + event listener would change the route w handlebars to whatever room a player left off
router.get('/continue', (req, res) => {
	res.render('signup');
});

module.exports = router;
