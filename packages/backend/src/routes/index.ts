const loginRoute = require('./login');
const authenticateRoute = require('./authenticate');
const searchRoute = require('./search');

module.exports= [].concat(loginRoute,authenticateRoute,searchRoute);

