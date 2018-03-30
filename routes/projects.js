var express = require('express');
var router = express.Router();
var projects = require('../database/model/projects');

router.post('/add',function (req,res) {
    let {content,id,img,site,title} = req.body
    projects.create({content,id,img,site,title},(err,backData) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'项目工程插入失败',
                ret:false
            })
            return
        }
        res.json({
            data:'success',
            code:200,
            msg:'项目工程插入成功',
            ret:true
        })
    })
})

router.get('/get',(req,res) => {
    let ids = req.query.id
    console.log(ids);
    let par = {}
    if(ids){
         par = {_id:ids}
    }
    projects.find(par, (err, findData) => {
        if (err) {
            res.json({
                data: err,
                code: 500,
                msg: '项目工程插入失败',
                ret: false
            })
            return
        }
        if (findData == null) {
            res.json({
                data: '输入的id无效',
                code: 400,
                msg: '输入的id无效',
                ret: false
            })
            return
        } else {
            res.json({
                data: findData,
                code: 200,
                msg: '项目工程插入成功',
                ret: true
            })
            return
        }
    })
})

router.post('/update',(req,res) =>{
    console.log(req.body);
    let {content,id,img,site,title} = req.body
    let nid = req.body.params
    projects.update({nid},{$set:{content,id,img,site,title}},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'项目工程查找失败',
                ret:false
            })
            return
        }
        if(data.n==0){
            res.json({
                data:'无效的id',
                code:400,
                msg:'无效的id',
                ret:false
            })
        }else{
            res.json({
                data:'更新项目工程成功',
                code:200,
                msg:'更新项目工程成功',
                ret:true
            })
        }
    })
})
router.post('/del',(req,res) => {
    let {id} = req.body
    projects.remove({_id:id},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'删除项目工程失败',
                ret:false
            })
            return
        }
        if(data.n == 0){
            res.json({
                data:'id输入错误',
                code:400,
                mag:'无效的id',
                ret:false
            })
        }else{
            res.json({
                data:'success',
                code:200,
                msg:'success',
                ret:true
            })
        }
    })
})
module.exports = router