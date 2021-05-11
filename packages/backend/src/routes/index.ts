const loginRoute = require('./login');
const authenticateRoute = require('./authenticate');
const searchRoute = require('./search');
const imageGridRoute = require('./grid');
const quizRoutes = require('./quiz')

module.exports= [].concat(loginRoute,authenticateRoute,searchRoute,imageGridRoute,quizRoutes);

