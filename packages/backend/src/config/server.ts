
const serverConfig = {
    host:process.env.hostname || "0.0.0.0",
    port:process.env.port || "4000",
    route_prefix:'/api'
}

module.exports = serverConfig;