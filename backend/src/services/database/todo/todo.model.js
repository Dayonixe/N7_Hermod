/* eslint-disable no-console */

module.exports = async function(app, tableName) {
    try {
        const db = app.get('knexClient')

        await db.schema.createTable(tableName, table => {
            table.increments('id')
            table.text('text').notNull()
            table.integer('user_id').unsigned()
            table.foreign('user_id').references('users.id').onDelete('CASCADE')
            table.timestamp('created_at').defaultTo(db.fn.now()) // ex: 2020-11-23 06:32:48.524937+01
        })
        console.log(`Created ${tableName} table`)
    } catch(err) {
        console.log(`Error creating ${tableName} table: ${err.toString()}`)
    }
}