const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choice extends Model {}

Choice.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false
		},
		story_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'story',
				key: 'id',
			},
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'choice',
	},
);

module.exports = Choice;
