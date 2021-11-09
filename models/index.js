const User = require('./User');
const Answer = require('./Answer');
const Story = require('./Story');
const Choice = require('./Choice');

User.hasMany(Answer, {
	foreignKey: 'user_id',
});

Answer.belongsTo(User, {
	foreignKey: 'user_id',
});

Answer.belongsTo(Choice, {
	foreignKey: 'choices_id',
});

Choice.belongsTo(Story, {});

Story.hasMany(Choice, {});

// Answer.hasOne(Story, {});

module.exports = { User, Answer, Story, Choice };
