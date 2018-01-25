module.exports = class BaseController {
	constructor(model, formatter, formatOptions) {
		this.formatter = formatter
		this.formatOptions = formatOptions
		this.model = model

		this.formatter.setOptions(formatOptions)
	}
	async all(res, options) {
		let error = null
		let data = null
		if (options) {
			const offset = options['_page'] ? options['_page'] : 0
			const limit = options['_limit'] ? options['_limit'] : 10
			const sort = options['_sort'] ? option['_sort'] : 'id'
			const order = option['_order'] ? option['_order'] : 'asc'
			const optionKeys = Object.keys(options).filter(key => key[0] !== '_')
			const where = optionKeys
				.reduce(
					(prev, curr) => Object.assign(prev, { [curr]: options[curr] }),
					{})
			options = Object.assign(this.formatOptions, { offset, limit, sort, order, where })
		} else {
			options = this.formatOptions
		}
		console.log(options)
		try {
			data = await this.model.findAll(options)
		} catch (err) {
			error = err
		}
		this.formatter.send(res, error, data)
	}
	async getById(res, id) {
		let error = null
		let data = null
		try {
			data = await this.model.findById(id)
		} catch (err) {
			error = err
		}
		this.formatter.send(res, error, data)
	}
	async new(res, values = {}) {
		let error = null
		let data = null
		try {
			data = await this.model.create(values)
		} catch (err) {
			error = err
		}
		this.formatter.send(res, error, data)
	}
	async update(res, id, values = {}) {
		let error = null
		let data = null
		try {
			data = await this.model.findById(id)
			await data.update(values)
		} catch (err) {
			error = err
		}
		this.formatter.send(res, error, data)
	}
	async destroy(res, id) {
		let error = null
		let data = null
		try {
			data = await this.model.findById(id)
			await data.destroy()
		} catch (err) {
			error = err
		}
		this.formatter.send(res, error, data)
	}
}
