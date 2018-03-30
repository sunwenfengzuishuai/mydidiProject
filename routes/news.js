var express = require('express');
var router = express.Router();
var news = require('../database/model/news');

router.post('/add',function (req,res) {
    let {contentText,content,img,title,author} = req.body
    news.create({contentText,content,img,title,author},(err,backData) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'数据插入失败',
                ret:false
            })
            return
        }
        res.json({
            data:'success',
            code:200,
            msg:'数据插入成功',
            ret:true
        })
    })
})

router.get('/get',(req,res) =>{
    let {id,pn=1} = req.query
    let params = {}
    if(!id){
        params = {}
    }else{
        params._id = id
    }
    news.find(params).sort({_id:-1}).skip((pn-1)*2).limit(3).exec((err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'数据插入失败',
                ret:false
            })
            return
        }
        res.json({
            data:data,
            code:200,
            msg:'数据插入成功',
            ret:true
        })
    })
})

router.post('/update',(req,res) =>{
    let {id,contentText,content,img,title,author} = req.body
    news.update({_id:id},{$set:{contentText,content,img,title,author,updateTime:new Date()}},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'数据查找失败',
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
                data:'更新数据成功',
                code:200,
                msg:'更新数据成功',
                ret:true
            })
        }
    })
})
router.post('/del',(req,res) => {
    let {id} = req.body
    news.remove({_id:id},(err,data) =>{
        if(err){
            res.json({
                data:err,
                code:500,
                msg:'删除数据失败',
                ret:false
            })
            return
        }
        if(data.n == 0){
            res.json({
                data:'id输入错误',
                code:400,
                mag:'无效的id000',
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