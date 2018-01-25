const BaseController = require('./baseController')
const models = require('../models')
const formatter = require('../helpers/formater')

exports.UserController = new BaseController(models.User, formatter, {
	attributes: { exclude: ['password'] }
})
