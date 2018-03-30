const express = require('express')
const router = express.Router()
const validator = require('validator');
const users = require('../database/model/users')
const md5 = require('blueimp-md5')

router.post('/logout',(req,res)=>{
    console.log(req.session.user);

    req.session.user= null
    res.json({
        data:'用户退出成功',
        code:200,
        msg:'用户退出成功',
        ret:true
    })
    console.log(req.session.user);
    return
})

module.exports = router