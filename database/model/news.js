var mongoose = require('mongoose');
var newSchema = mongoose.Schema({
    contentText:{
        type:String
    },
    content:{
        type:String
    },
    img :{
        type:String
    },
    createTime:{
        type: Date,
        default: Date.now()
    },
    updateTime:{
        type: Date,
        default: Date.now()
    },
    author :{
        type:String
    },
    title :{
        type:String
    }
},{versionKey:false});
module.exports = mongoose.model('news',newSchema,'news')