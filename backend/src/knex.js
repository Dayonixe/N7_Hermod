const knex = require('knex')

module.exports = function (app) {
   const { client } = app.get('dbConfig')

   const connection = {
      password: process.env.DB_PASSWORD,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME
   }

   const db = knex({ client, connection })

   app.set('knexClient', db)
};