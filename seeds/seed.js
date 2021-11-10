const sequelize = require('../config/connection');
const { User, Story, Choice, Answer } = require('../models');

const userData = require('./userData.json');
const storyData = require('./storyData.json');
const choiceData = require('./choiceData.json');
const answerData = require('./answerData.json');

const seedDatabase = async () => {
  await sequelize.sync({ alter: true, force: true });

  for (var i = 0; i < userData.length; i++) {
    await User.create(userData[i])
  }
  // await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (var i = 0; i < storyData.length; i++) {
    await Story.create(storyData[i])
  }

  // await Story.bulkCreate(storyData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (var i = 0; i < choiceData.length; i++) {
    await Choice.create(choiceData[i])
  }

  // await Choice.bulkCreate(choiceData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await Answer.bulkCreate(answerData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
