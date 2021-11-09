const User = require('./User');
const Answer = require('./Answer');
const Story = require('./Story');
const Choice = require('./Choice');


Story.hasMany(Choice, {
    foreignKey: 'story_id',
});

Choice.belongsTo(Story, {
    foreignKey: 'story_id',
});

User.hasMany(Answer, {
    foreignKey: 'user_id',
});

Answer.belongsTo(User, {
    foreignKey: 'user_id',
});

Choice.hasMany(Answer, {
    foreignKey: 'choice_id',
});

Answer.belongsTo(Choice, {
    foreignKey: 'choice_id',
});


// Answer.hasOne(Story, {});

module.exports = { User, Answer, Story, Choice };
