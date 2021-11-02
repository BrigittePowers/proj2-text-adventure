const { User } = require('../models');

const userData = [
	{
		username: 'Natasha',
		password: 'Ortiz',
	},
	{
		username: 'Greg',
		password: 'Zaragoza',
	},
	{
		username: 'Brigitte',
		password: 'Powers',
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
