var authenticate = require('../controllers/authenticate');

module.exports = {
    method: 'GET',
    path: '/authenticate',
    handler: authenticate
}