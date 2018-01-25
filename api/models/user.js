'use strict'

const ROLE = require('../config/enums').ROLE
const values = Object.keys(ROLE)

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV1,
				primaryKey: true
			},
			role: {
				type: DataTypes.ENUM(values),
				defaultValue: ROLE.CUSTOMER
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isEmail: true,
					notEmpty: true
				}
			},
			postalCode: {
				type: DataTypes.INTEGER,
				field: 'postal_code',
			},
			telephoneNo: {
				type: DataTypes.STRING,
				field: 'telephone_no',
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			province: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},	
			district: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: true
				}
			},
			subDistrict: {
				type: DataTypes.STRING,
				allowNull: false,
				field: 'sub_district',
				validate: {
					notEmpty: true
				}
			},
			road: {
				type: DataTypes.STRING,
				defaultValue: ''
			},
			villageOrBuilding: {
				type: DataTypes.STRING,
				defaultValue: '',
				field: 'village_or_building'
			},
			moo: {
				type: DataTypes.STRING,
				defaultValue: ''
			},
			soi: {
				type: DataTypes.STRING,
				defaultValue: ''
			}
		},
		{
			classMethods: {
				/* eslint-disable no-unused-vars */
				associate: function(models) {
					// associations can be defined here
				}
			}
		}
	)
	return User
}
