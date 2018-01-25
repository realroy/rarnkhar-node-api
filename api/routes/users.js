var express = require('express')
var router = express.Router()

const userController = require('../controllers').UserController

router
	.get('/', (req, res) => userController.all(res, req.query))
	.get('/:id', (req, res) => userController.getById(res, req.params.id))
	.post('/', (req, res) => userController.new(res, req.body))
	.put('/:id', (req, res) => userController.update(res,req.params.id, req.body))
	.delete('/:id', (req, res) => userController.destroy(res, req.params.id))

module.exports = router
