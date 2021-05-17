var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    name:String,
});

module.exports = mongoose.model('Quiz',userSchema);