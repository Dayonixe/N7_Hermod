module.exports = async function(app, tableName) {
	try {
		const db = app.get('knexClient')

		await db.schema.createTable(tableName, table => {
			table.increments('id')
			table.integer('widget').unsigned()
			table.integer('user_id')
			table.foreign('user_id').references('users.id').onDelete('CASCADE')
			table.timestamp('created_at').defaultTo(db.fn.now())
		})
		console.log(`Created table ${tableName}`)
	} catch(err) {
		console.log(`Error while creating table ${tableName}: ${err.toString()}`)
	}
}