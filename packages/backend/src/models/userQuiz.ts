var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userQuiz = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model('userQuiz', userSchema);