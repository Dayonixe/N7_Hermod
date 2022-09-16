module.exports = async function(app, tableName) {
	try {
		const db = app.get('knexClient')

		await db.schema.createTable(tableName, table => {
			table.increments('id')
			table.string('username')
			table.string('email')
			table.string('password')
			table.timestamp('created_at').defaultTo(db.fn.now())
		})
		console.log(`Created table ${tableName}`)
	} catch(err) {
		console.log(`Error while creating table ${tableName}: ${err.toString()}`)
	}
}