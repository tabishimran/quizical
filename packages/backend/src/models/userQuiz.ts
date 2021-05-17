var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userQuizSchema = new Schema({
    userId: String,
    quizzes:Array
});

module.exports = mongoose.model('userQuiz', userQuizSchema);