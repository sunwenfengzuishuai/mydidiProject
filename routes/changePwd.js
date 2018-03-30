var express = require('express')
var router = express.Router()
var validator = require('validator')
var users = require('../database/model/users')
var md5 = require('blueimp-md5')

router.post('/update',(req,res) =>{
    let {pwd,newPwd} = req.body
    if(!pwd||validator.isEmpty(pwd.trim())){
        res.json({
            data:'密码不合法',
            code:400,
            msg:'密码不合法',
            ret:false
        })
        return
    }
    else if (!newPwd || validator.isEmpty(newPwd.trim())){
        res.json({
            data:'新密码不合法',
            code:400,
            msg:'新密码不合法',
            ret:false
        })
        return
    }else{
        let userPhone = req.session.user.phone
        users.findOne({phone:userPhone},(err,data)=>{
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:err,
                    ret:false
                })
                return
            }
           if(md5(pwd.trim())==data.pwd){
                users.update({phone:userPhone},{$set:{pwd:md5(newPwd.trim())}},(err,updata) =>{
                    if(err){
                        res.json({
                            data:err,
                            code:500,
                            msg:err,
                            ret:false
                        })
                        return
                    }
                    else{
                        res.json({
                            data:'修改密码成功',
                            code:200,
                            msg:'修改密码成功',
                            ret:true
                        })
                        return
                    }
                })
           }else{
               console.log(data.pwd);
               res.json({
                   data:'旧密码输入错误',
                   code:400,
                   msg:'旧密码输入错误',
                   ret:false
               })
               return
           }
        })
    }

})

module.exports = router