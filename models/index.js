const User = require('./User');
const Answer = require('./Answer');
const Story = require('./Story');
const Choice = require('./Choice');

Story.hasMany(Choice, {
});

Choice.belongsTo(Story, {
});

// Choice.hasMany(Answer, {
// });

// User.hasMany(Answer, {
// });

// Answer.hasOne(User, {
// });

// Answer.hasOne(Choice, {
// });


module.exports = { User, Answer, Story, Choice };
