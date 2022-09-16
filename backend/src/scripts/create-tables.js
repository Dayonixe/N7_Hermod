require('dotenv').config()
const feathers = require('@feathersjs/feathers')
const configuration = require('@feathersjs/configuration')

const knex = require('../knex')

const createUsersTable = require('../services/database/users/users.model')
const createWidgetsTable = require('../services/database/widgets/widgets.model')
const createTodosTable = require('../services/database/todo/todo.model.js')


async function main() {
   const app = feathers()

   app.configure(configuration())
   app.configure(knex)
   console.log("Create")
   const db = app.get('knexClient')
   await db.schema.dropTableIfExists('todo')
   await db.schema.dropTableIfExists('widgets')
   await db.schema.dropTableIfExists('users')

   // database   
   await createUsersTable(app, "users")
   await createWidgetsTable(app, "widgets")
   await createTodosTable(app, "todo")

   process.exit(0)
}

main()
