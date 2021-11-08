const router = require('express').Router();
const { User, Story, Choice } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
	try {
		const userData = await User.findAll({
			attributes: { exclude: ['password'] },
			order: [['username', 'ASC']],
		});

		const users = userData.map((project) => project.get({ plain: true }));

		res.render('homepage', { users });
	} catch (err) {
		res.status(500).json(err);
	}
});

//test Story .get
router.get('/story/:id', async (req, res) => {
	try {
		const storyData = await Story.findByPk(req.params.id, {
			include: [
				{
					model: Choice,
					attributes: [
						'id',
						'content'
					]
				}
			]
		});

		const story = storyData.get({ plain: true });

		// const storyChoices = await Choice.findAll({
		// 	include: [
		// 		{ model: Story }
		// 	],
		// 	where: {
		// 		story_id: story.id
		// 	}
		// });

		// const choices = storyChoices.map((data) => data.get({ plain: true }));

		res.render('story', {
			story
			// choices
			// logged_in: req.session.logged_in,
		});
		// res.json(storyChoices);

	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// // login
// router.get('/login', (req, res) => {
// 	if (req.session.loggedIn) {
// 		res.redirect('/');
// 		return;
// 	}
// 	res.render('login');
// });

// // signup
// router.get('/signup', (req, res) => {
// 	res.render('signup');
// });

module.exports = router;
