var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trackSchema = new Schema({
    name: String,
    duration: Number,
    id: String,
    artists:Array,
    preview: String,
    album:String,
    albumId:String,
    albumType:String,
    release:String
});

module.exports = mongoose.model('Track', trackSchema);