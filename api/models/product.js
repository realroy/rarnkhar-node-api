'use strict'
module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define(
		'Product',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			description: {
				type: DataTypes.TEXT,
				defaultValue: '',
			},
			price: {
				type: DataTypes.DECIMAL(100),
				defaultValue: 0.1,
				validate: {
					min: 0.01
				}
			},
			inStock: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
				validate: {
					min: 0
				}
			},
			imgUrls: DataTypes.ARRAY(DataTypes.TEXT),
			brand: {
				type: DataTypes.STRING,
				defaultValue: ''
			},
			tags: DataTypes.ARRAY(DataTypes.TEXT)
		},
		{
			classMethods: {
			}
		}
	)
	return Product
}
