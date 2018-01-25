'use strict'
module.exports = (sequelize, DataTypes) => {
	var Order = sequelize.define(
		'Order',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
			},
		},
		{
			classMethods: {
				associate: function(models) {
					models.Order.belongTo(models.User, {
						onDelete: 'CASCADE',
						foreignKey: {
							allowNull: false
						}
					})
				}
			}
		}
	)
	return Order
}
