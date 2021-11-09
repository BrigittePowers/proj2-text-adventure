const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Answer, Choice, Story } = require('../models');
const withAuth = require('../utils/auth');

// Unfinished try/catch block worked on w peter
// router.get('/', withAuth, (req, res) => {
// 	Promise.all([
// 		Answer.findAll({
// 			where: {
// 				user_id: req.session.user_id,
// 			},
// 			attributes: ['id', 'user_id', 'choice_id'],
// 		}),
// 		User.findOne({
// 			where: {
// 				id: req.session.user_id,
// 			},
// 		}).catch,
// 	]);
// });

// add session object

// THIS ROUTE WORKS BUT TRY TO MAKE A TRY/CATCH
router.get('/', withAuth, (req, res) => {
	Answer.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: ['id', 'user_id', 'choice_id'],
		include: [
			{
				model: Choice,
				attributes: ['id', 'content', 'story_id'],
			},
			{
				model: User,
				attributes: ['username'],
			},
			{
				model: Story,
				attributes: ['content', 'filename'],
			},
		],
	})
		.then((dbAnswerData) => {
			const answers = dbAnswerData.map((answer) =>
				answer.get({ plain: true }),
			);
			const dbData = {
				user: answers[0].user.username,
				answers: [...answers],
			};
			res.render('dashboard', { dbData, loggedIn: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// route to get one Answer
router.get('/answer/:id', async (req, res) => {
	try {
		const answerData = await Answer.findByPk(req.params.id);
		if (!answerData) {
			res.status(404).json({ message: 'No answer with this id!' });
			return;
		}
		const dish = answerData.get({ plain: true });
		res.render('answer', answer);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
