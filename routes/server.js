var express = require('express')
var router = express.Router()
var path = require('path')

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'../server/index.html'))
})

module.exports = router