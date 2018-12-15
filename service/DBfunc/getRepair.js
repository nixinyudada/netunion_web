const mongoose = require('mongoose')
const db = require('./db')

function getRepair(callback){
    db.find((err,ret)=>{
    if (err){
        console.log('数据查询失败！')
        callback(null)
    }else{
        console.log('数据查询成功！')
        callback(ret)
    }
 })
}

 module.exports = getRepair