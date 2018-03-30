var mongoose = require('mongoose');
var newSchema = mongoose.Schema({
    content:{
        type:String
    },
    id:{
        type:Number
    },
    img :{
        type:String
    },
    site:{
        type:String
    },
    title:{
        type:String
    }
},{versionKey:false});
module.exports = mongoose.model('projects',newSchema,'projects')