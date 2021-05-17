var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var albumSchema = new Schema({
    name:String,
    type:String,
    release:Date,
    id:String,
    aritsts:Array,
    totalTracks:Number
});

module.exports = mongoose.model('Album',userSchema);