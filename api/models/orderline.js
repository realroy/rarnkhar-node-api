'use strict'

const ORDER = require('../config/enums').ORDER
const values = Object.keys(ORDER)

module.exports = (sequelize, DataTypes) => {
	var OrderLine = sequelize.define(
		'OrderLine',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
			quantity: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1
				}
			},
			status: {
				type: DataTypes.ENUM(values),
				defaultValue: ORDER.WAIT_FOR_PAYMENT
			}
		},
		{
			classMethods: {
				associate: function(models) {
					models.OrderLine.belongTo(models.Order, {
						onDelete: 'CASCADE',
						foreignKey: {
							allowNull: false
						}
					})
					models.OrderLine.hasMany(models.Product, {
						foreignKey: {
							allowNull: false
						}
					})
				}
			}
		}
	)
	return OrderLine
}
