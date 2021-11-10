const router = require('express').Router();
const { Answer, Choice, User } = require('../../models');

//get all recorded answer instances from all users?
router.get('/', async (req, res) => {
	try {
		const allUserAnswers = await Answer.findAll({
			include: [
				{
					model: Choice,
					order: [['id', 'ASC']],
				},
				{
					model: User,
					attributes: {
						exclude: ['password'],
					},
				},
			],
			order: [['user_id', 'ASC']],
		});

		res.status(200).json(allUserAnswers);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/', async (req, res) => {
	try {
		const newPlayerAnswers = await Answer.create({
			...req.body,
			user_id: req.session.user_id,
		});

		res.status(200).json(newPlayerAnswers);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
