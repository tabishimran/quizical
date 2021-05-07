const Hapi = require('@hapi/hapi');
const routes = require('./routes/index');
const configuration = require('./config/index');

const init = async () => {
    // initialize server
    const server = Hapi.server({
        port: configuration.server.port,
        host: configuration.server.host
    });

    // setup route prefix
    server.realm.modifiers.route.prefix = configuration.server.route_prefix;

    // setup auth strategy
    await server.register(require('@hapi/cookie'));
    server.auth.strategy('session','cookie',configuration.auth);
    server.auth.default('session');

    // setup server routes
    server.route(routes);

    // start server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();