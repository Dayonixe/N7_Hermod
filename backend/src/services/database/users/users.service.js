const service = require('feathers-knex')

module.exports = function(app) {
	const db = app.get('knexClient')
	let name = 'users';

	app.use(name, service({
		Model: db,
		name,
		paginate: false
	}))

}