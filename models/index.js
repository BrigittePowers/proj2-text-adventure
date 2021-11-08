const User = require('./User');
const Answer = require('./Answer');
const Story = require('./Story');
const Choice = require('./Choice');

User.hasMany(Answer, {
});

Choice.belongsTo(Story, {
});

Choice.hasMany(Answer, {
});

Answer.belongsTo(User, {
});

Answer.belongsTo(Choice, {
});


module.exports = { User, Answer, Story };