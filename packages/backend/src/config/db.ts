const Mongoose = require("mongoose");

Mongoose.connect(process.env.quizical_mongo_uri);
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('Connection with database succeeded.');
});

exports.db = db;