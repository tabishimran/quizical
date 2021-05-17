var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    artistId:String,
    questions:Array,
    id:String
});

module.exports = mongoose.model('Quiz',userSchema);