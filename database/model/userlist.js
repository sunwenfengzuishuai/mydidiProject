var mongoose = require('mongoose')
var ulisSchema = new mongoose.Schema({
    name:{
        type:String
    },
    phone:{
        type:String,
        default:''
    },
    idNum:{
        type:String,
        default:''
    },
    status:{
        type:String,
        default:''
    },
    level:{
        type:String,
        default:''
    }
},{versionKey:false})
module.exports = mongoose.model('userlist',ulisSchema,'userlist')