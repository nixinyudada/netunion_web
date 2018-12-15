const mongoose = require('mongoose')
const db = require('./db')
function addRepair(data,callback){
    
 let repair = new db({
     dormNumber:data.dormNumber,
     callNumber:data.callNumber,
     StateDescription:data.StateDescription,
     repairDate:data.repairDate
 })

 repair.save((err,ret)=>{
    if (err){
        console.log('数据插入失败！')
        callback('失败')
    }else{
        console.log('数据插入成功！')
        callback('成功')
    }
 })

}


 

 module.exports = addRepair