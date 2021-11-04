const router = require('express').Router();
const { User, Answer } = require('../../models');

// find all users (without password)
router.get('/', (req, res) => {
	User.findAll({
		attributes: { exclude: ['[password'] },
	})
		.then((dbUserData) => res.json(dbUserData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// TODO: possible route to display a user's choices made in their last run
router.get('/:id', (req, res) => {
	User.findOne({
		attributes: { exclude: ['password'] },
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Answer,
				attributes: ['id', 'choice_id', 'answer_id'],
			},
		],
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// new user sign-up
router.post('/', (req, res) => {
	User.create({
		username: req.body.username,
		password: req.body.password,
	})

		.then((dbUserData) => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res.json(dbUserData);
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// returning user sign-in
router.post('/login', (req, res) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(400).json({
					message: 'No user with that username!',
				});
				return;
			}
			const validPassword = dbUserData.checkPassword(req.body.password);

			if (!validPassword) {
				res.status(400).json({ message: 'Incorrect password!' });
				return;
			}
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.username = dbUserData.username;
				req.session.loggedIn = true;

				res.json({
					user: dbUserData,
					message: 'You are now logged in!',
				});
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// logout
router.post('/logout', (req, res) => {
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

// user update
router.put('/:id', (req, res) => {
	User.update(req.body, {
		individualHooks: true,
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData[0]) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// user delete
router.delete('/:id', (req, res) => {
	User.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
