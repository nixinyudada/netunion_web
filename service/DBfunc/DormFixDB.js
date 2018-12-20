const mongoose = require("mongoose")
const sendMail = require("../utils/SendMails")


// 1. 连接数据库

mongoose.connect('mongodb://localhost/NetUnion',{useNewUrlParser:true})

var dormfixs = new mongoose.Schema({
    dormNum:String,
    callNum:String,
    userDescr:String,
    findDate:String,
    state:Number,
    adminLog:String,
    admingUpdateTime:String
})

const dormfix = mongoose.model('Dormfix',dormfixs)


// 插入数据
var data1 = {
    dormNum:"3-556",
    callNum:"16602803351",
    userDescr:"This is descriptions！",
    findDate:"2018-05-16 22:10:10",
    state:0,
    adminLog:"This is admin log!",
    admingUpdateTime:new Date().toString()
}

function DormFixInsert(data,callback){
    console.log(data)
    var opera = new dormfix(data)
    
    opera.save((err,ret)=>{
        if (err) {
            console.log("插入失败！")
            callback(false,"插入失败！")
        }else{
            console.log("插入成功！",ret.dormNum)
            callback(true,"插入成功！")
            // 给工作人员发送邮件
            var sendData = {
                from:"UESTC NETUNION 940306566@qq.com",
                to:"940306566@qq.com", // 收件人
                subject:ret.dormNum+"有一个报修！",
                html:"<b>用户故障描述是："+ ret.userDescr+"<br/>联系电话"+ret.callNum+"<br/>用户故障发现的时间：" + ret.findDate+"</b>",
                // attachments:[
                //     {
                //         filename:"", // 文件名称
                //         path:"" // 文件路径
                //     }
                // ]
            }
            //sendMail.sendMail("940306566@qq.com","jklkbcbsfwrsbeaa",sendData)
        } 
    })
}


// DormFixInsert(data1,function(bool,msg){
//     console.log(bool,msg)
// })
module.exports = {
    DormFixInsert:DormFixInsert
}