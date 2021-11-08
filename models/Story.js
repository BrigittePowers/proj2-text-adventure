const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Story extends Model {}

Story.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		choice_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'choice',
				key: 'id',
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false
			},
			sequelize,
			timestamps: false,
			freezeTableName: true,
			underscored: true,
			modelName: 'story'
		},
	}
);

module.exports = Story;
