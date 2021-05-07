const authenticate = require('../controllers/authenticate');

module.exports = {
    method: 'GET',
    path: '/authenticate',
    options: {
        auth: {
            mode: 'try'
        }
    },
    handler: authenticate
}