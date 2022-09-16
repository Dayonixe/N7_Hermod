const {authenticate} = require("@feathersjs/authentication")
const weather = require('./custom/weather/weather.service.js')
const users = require("./database/users/users.service")
const auth = require("./authentication/index.js")
const todoService = require('./database/todo/todo.service.js')
const cinema = require('./custom/cinema/cinema.service.js')
const widgets = require('./database/widgets/widgets.service')

module.exports = function (app) {
	app.configure(weather)
	app.configure(users)
	app.configure(auth)
	app.configure(todoService)
	app.configure(cinema)
	app.configure(widgets)

	app.service('todo').hooks({
		before: {
			all: [ async context => {
				authenticate('jwt')
			}]
		}
	})
	app.service('weather').hooks({
		before: {
			all: [ async context => {
				authenticate('jwt')
			}]
		}
	})
	app.service('cinema').hooks({
		before: {
			all: [ async context => {
				authenticate('jwt')
			}]
		}
	})
	app.service('widgets').hooks({
		before: {
			all: [ async context => {
				authenticate('jwt')
			}]
		}
	})
}