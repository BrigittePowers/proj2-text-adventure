const router = require('express').Router();
const { User, Story, Choice, Answer } = require('../models');
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

router.get('/story/:id', withAuth, async (req, res) => {
	try {
		const storyData = await Story.findByPk(req.params.id, {
			include: [
				{
					model: Choice,
					attributes: ['id', 'content', 'route'],
				},
			],
		});

		const story = storyData.get({ plain: true });
		res.render('story', { story });
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
