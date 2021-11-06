const sequelize = require('../config/connection');
const { User, Story } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Story.bulkCreate(storyData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
