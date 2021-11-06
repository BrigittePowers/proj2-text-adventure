const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const storyRoutes = require('./story-routes.js');

router.use('/users', userRoutes);
router.use('/story', storyRoutes);

module.exports = router;
