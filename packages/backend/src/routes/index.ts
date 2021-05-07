const loginRoute = require('./login');
const authenticateRoute = require('./authenticate');
const searchRoute = require('./search');
const wordcloudRoute = require('./wordcloud');

module.exports= [].concat(loginRoute,authenticateRoute,searchRoute,wordcloudRoute);

