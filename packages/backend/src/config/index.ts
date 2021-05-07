const server = require('./server');
const auth = require('./auth');

const config = {
    server: server,
    auth:auth
}

module.exports = config;