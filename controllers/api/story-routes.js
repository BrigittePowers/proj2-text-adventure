// const router = require('express').Router();
// const { Story } = require('../../models');

// router.get('/', async (req, res) => {
// 	try {
// 		res.render('story');
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// TODO: possible route to display a user's choices made in their last run
// router.get('/:id', async (req, res) => {
// 	try {
// 		const storyData = await Story.findByPk(req.params.id);

// 		const story = storyData.get({ plain: true });

// 		res.render('story', {
// 			story,
// 			// logged_in: req.session.logged_in,
// 			// username: Post.user_id
// 		});

// 		res.status(200).json(storyData);
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// module.exports = router;
