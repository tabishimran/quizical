const loginRoute = require('./login');
const authenticateRoute = require('./authenticate');

module.exports= [].concat(loginRoute,authenticateRoute);

