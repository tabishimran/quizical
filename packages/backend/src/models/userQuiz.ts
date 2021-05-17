var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userQuiz = new Schema({
    user: String,
    quizzes:Array
});

module.exports = mongoose.model('UserQuiz', userSchema);