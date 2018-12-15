const express = require('express')
const addRepair = require('./../DBfunc/addRepair')
const getRepair = require('./../DBfunc/getRepair')

let router = express.Router()

router.get('/repairList',(req,res)=>{
    getRepair((ret)=>{
        res.jsonp(ret)
    })
    
})

router.post('/addRepair',(req,res)=>{
    console.log(req.body)
    addRepair(req.body,(msg)=>{
        res.send('数据插入'+msg+'！')
    })
})




// 导出 router

module.exports = router