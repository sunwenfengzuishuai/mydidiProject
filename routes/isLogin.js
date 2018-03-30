const express = require('express')
const router = express.Router()
const validator = require('validator');
const users = require('../database/model/users')
const md5 = require('blueimp-md5')

router.get('/isLogin',(req,res)=>{
    // console.log(req.session);
    // if(req.session.user){
    //     res.json({
    //         data:'用户已经登陆',
    //         code:200,
    //         msg:'用户已经登陆',
    //         ret:true
    //     })
    //     return
    // }else{
    //     res.json({
    //         data:'用户未登陆a',
    //         code:200,
    //         msg:'用户未登陆',
    //         ret:false
    //     })
    //     return
    // }
    res.json({
                 data:'用户已经登陆',
                 code:200,
                 msg:'用户已经登陆',
                 ret:true
             })
             return
})

module.exports = router