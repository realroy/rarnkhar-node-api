module.exports = {
	options: {},
	setOptions(options = {}) {
		this.options = options
	},
	send(res, err, data) {
		if (this.options.attributes.exclude && data) {
			const excludeAttrs = this.options.attributes.exclude
			if (!Array.isArray(data)) {
				data = data.toJSON()
				excludeAttrs.forEach(key => delete data[key])
			}
		}
		return res.json({ err, data })
	}
}
