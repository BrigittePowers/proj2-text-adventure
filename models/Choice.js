const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Choice extends Model {}

Choice.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		story_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'story',
				key: 'id',
			},
		},
		content: {
			type: DataTypes.STRING,
			allowNull: false
		},
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'choice',
	}
);

module.exports = Choice;