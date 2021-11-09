const sequelize = require('../config/connection');
const { User, Story, Choice, Answer } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const choiceData = require('./choiceData.json');
const answerData = require('./answerData.json');

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

  await Choice.bulkCreate(choiceData, {
    individualHooks: true,
    returning: true,
  });

  await Answer.bulkCreate(answerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
