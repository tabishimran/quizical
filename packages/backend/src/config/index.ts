const server = require('./server');
const auth = require('./auth');
const dbConfig = require('./db');

const config = {
    server: server,
    auth:auth,
    db:dbConfig
}

module.exports = config;