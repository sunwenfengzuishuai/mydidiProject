const express = require('express')
const router = express.Router()
const validator = require('validator');
const userlist = require('../database/model/userlist')
const md5 = require('blueimp-md5')

router.post('/add',(req,res)=>{
    let {name,phone,Idnum,status,level} = req.body
    if(!name || validator.isEmpty(name)){
        res.json({
            data:'客户名字不合法',
            code:400,
            mag:'客户名字不合法',
            ret:false
        })
        return
    }else{
        userlist.create({name,phone,Idnum,status,level},(err,data) =>{
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
                res.json({
                    data:'创建客户失败',
                    code:500,
                    msg:'创建客户失败',
                    ret:false
                })
                return
            }else{
                res.json({
                    data:'创建客户成功',
                    code:200,
                    msg:'创建客户成功',
                    ret:true
                })
                return
            }
        })
    }

})

router.get('/get',(req,res)=>{
    userlist.find({},(err,data)=>{
        if(err){
            res.json({
                data:err,
                code:400,
                msg:err,
                ret:false
            })
            return
        }
        if(data.length==0){
            res.json({
                data:'客户列表查找失败',
                code:400,
                msg:'客户列表查找失败',
                ret:false
            })
            return
        }else{
            res.json({
                data:data,
                code:200,
                msg:'客户列表查找成功',
                ret:true
            })
        }
    })
})

router.post('/update',(req,res)=>{
    let {id,name,phone,Idnum,status,level} = req.body
    console.log(id);
    console.log(req.body);
    userlist.update({_id:id},{$set:{name,phone,Idnum,status,level}},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'数据客户失败',
                ret:false
            })
            return
        }
        if(data.n==0){
            console.log(data);
            res.json({
                data:'无效的id',
                code:400,
                msg:'无效的id',
                ret:false
            })
        }else{
            res.json({
                data:'更新客户成功',
                code:200,
                msg:'更新客户成功',
                ret:true
            })
        }
    })
})

module.exports = router