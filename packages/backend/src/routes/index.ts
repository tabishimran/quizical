const loginRoute = require('./login');
const authenticateRoute = require('./authenticate');
const searchRoute = require('./search');
const imageGridRoute = require('./grid');
const quizRoute = require('./quiz')

module.exports= [].concat(loginRoute,authenticateRoute,searchRoute,imageGridRoute,quizRoute);

