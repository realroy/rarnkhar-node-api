const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const fs = require('fs')

const env = require('./config')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('./routes'))
fs
	.readdirSync(`${__dirname}/routes`, 'utf-8')
	.filter(filename => filename !== 'index.js')
	.map(filename => filename.split('.')[0])
	.forEach(route => app.use(`/${route}`, require(`./routes/${route}`)))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found')
	err.status = 404
	next(err)
})

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = env.NODE_ENV === 'development' ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.json({ err })
})

module.exports = app

