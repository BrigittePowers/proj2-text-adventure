const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Answer, Choice, Story } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
	Answer.findAll({
		where: {
			user_id: req.session.user_id,
		},
		attributes: ['id', 'user_id', 'choices_id'],
		include: [
			{
				model: Choice,
				attributes: ['id', 'content', 'story_id'],
				include: {
					model: Story,
					attributes: ['id', 'content', 'filename'],
				},
			},
			{
				model: User,
				attributes: ['username'],
			},
			{
				model: User,
				attributes: ['username'],
			},
		],
	})
		.then((dbAnswerData) => {
			const answers = dbAnswerData.map((answer) =>
				answer.get({ plain: true }),
			);

			let arr = [];

			// filter answer data to remove answers that dont need to be recorded
			for (let i = 0; i < answers.length; i++) {
				let a = answers[i].choice.content;
				let filter = [8, 9, 13, 14, 15, 17, 19, 21, 22, 34, 35];
				if (!filter.includes(answers[i].choice.id)) {
					arr.push(a);
					console.log(arr);
				}
			}

			// remove repeats from array
			var unique = arr.filter(onlyUnique);

			// send array to the dashboard route
			const dbData = {
				user: req.session.username,
				answers: [...unique],
			};

			console.log(dbData.answers);
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

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

module.exports = router;
