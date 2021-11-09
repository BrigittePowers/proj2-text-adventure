const User = require('./User');
const Answer = require('./Answer');
const Story = require('./Story');
const Choice = require('./Choice');

Story.hasMany(Choice, {
    foreignKey: 'story_id',
    onDelete: 'CASCADE'
});

Choice.belongsTo(Story, {
    foreignKey: 'story_id',
});

User.hasMany(Answer, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Answer.belongsTo(User, {
    foreignKey: 'user_id',
});

Choice.hasOne(Answer, {
    foreignKey: 'choices_id',
    onDelete: 'CASCADE'
});

Answer.belongsTo(Choice, {
    foreignKey: 'choices_id',
});


module.exports = { User, Answer, Story, Choice };
