var mongoose = require('mongoose')
var userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    pwd:{
        type:String
    },
    phone:{
        type:String
    },
    idNum:{
        type:String,
        default:''
    },
    sex:{
        type:Number,
        default:2
    },
    type:{
        type:Number,
        default:0
    },
    email:{
        type:String,
        default:''
    },
    address:{
        type:String,
        default:''
    }
},{versionKey:false})

module.exports = mongoose.model('users',userSchema,'users')