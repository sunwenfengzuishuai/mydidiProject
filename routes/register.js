const express = require('express')
const router = express.Router()
const validator = require('validator');
const users = require('../database/model/users')
const md5 = require('blueimp-md5')

router.post('/register',(req,res) =>{
    let {name,phone,pwd,address,idNum,sex,type,email} = req.body
    if(!phone||!validator.isMobilePhone(phone,'zh-CN')){
        res.json({
            data:'手机号码不合法',
            code:400,
            msg:'手机号码不合法',
            ret:false
        })
        return
    }
    else if(!name || validator.isEmpty(name.trim())){
        res.json({
            data:'用户名不合法',
            code:400,
            msg:'用户名不合法',
            ret:false
        })
        return
    }
    else if(!pwd || validator.isEmpty(pwd.trim())){
        res.json({
            data:'密码不合法',
            code:400,
            msg:'密码不合法',
            ret:false
        })
        return
    }else{
        users.findOne({phone},(err,data) => {
            
            if(err){
                res.json({
                    data:err,
                    code:500,
                    msg:err,
                    ret:false
                })
                return
            }
            if(data==null){
                pwd=md5(pwd)
                users.create({name,phone,pwd,address,idNum,sex,type,email},(err,createData) =>{
                    res.json({
                        data:'注册成功',
                        code:200,
                        msg:'注册成功',
                        ret:true
                    })
                    return
                })
            }else{
                res.json({
                    data:'该手机号已经被注册',
                    code:400,
                    msg:'该手机号已经被注册',
                    ret:true
                })
                return
            }
        })
    }
})

module.exports = router