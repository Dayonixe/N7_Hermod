const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');

module.exports = app => {
  const authService = new AuthenticationService(app);
  const localStrategy =  new LocalStrategy();

  authService.register('jwt', new JWTStrategy());
  authService.register('local',localStrategy);

  app.use('/authentication', authService);

	app.service('users').hooks({
		before: {
			async create(context) {
        await localStrategy.hashPassword(context.data.password).then(data => context.data.password = data)
			}
		}
	})
}