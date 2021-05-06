const Hapi = require('@hapi/hapi');
const routes = require('./routes/index');


const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: '0.0.0.0'
    });
    server.realm.modifiers.route.prefix = '/api';
    server.route(routes);


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();