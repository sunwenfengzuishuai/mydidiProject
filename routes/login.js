const express = require('express')
const router = express.Router()
const validator = require('validator');
const users = require('../database/model/users')
const md5 = require('blueimp-md5')

router.post('/login',(req,res) =>{
    let {phone,pwd} = req.body
    if(!phone||!validator.isMobilePhone(phone,'zh-CN')){
        res.json({
            data:'用户名不合法',
            code:400,
            msg:'用户名不合法',
            ret:false
        })
        return
    }else if(!pwd){
        res.json({
            data:'密码不合法',
            code:400,
            msg:'密码不合法',
            ret:false
        })
        return
    }else{
        users.findOne({phone},(err,data) =>{
            if(data==null){
                res.json({
                    data:'用户不存在',
                    code:400,
                    msg:'用户不存在',
                    ret:false
                })
                return
            }
            if(md5(pwd)==data.pwd){

                req.session.user= data
                res.json({
                    data:'登陆成功',
                    code:200,
                    msg:'登陆成功',
                    ret:true
                })
                return
            }else{
                console.log(data.pwd);
                res.json({
                    data:'密码输入错误',
                    code:400,
                    msg:'密码输入错误',
                    ret:false
                })
                return
            }
        })
    }
})
module.exports = router