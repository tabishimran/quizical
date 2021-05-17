var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name:String,
    country:String,
    email:String,
    uri:{ type : String , unique : true, required : true, dropDups: true },
    product:String,
    tokens:Object
});

module.exports = mongoose.model('Users',userSchema);