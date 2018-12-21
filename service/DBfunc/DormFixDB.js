const mongoose = require("mongoose")
const sendMail = require("../utils/SendMails")


// 1. 连接数据库

mongoose.connect('mongodb://localhost/NetUnion', { useNewUrlParser: true })

var dormfixs = new mongoose.Schema({
    dormNum: String,
    callNum: String,
    userDescr: String,
    findDate: String,
    state: Number,
    adminLog: String,
    admingUpdateTime: String
})

const dormfix = mongoose.model('Dormfix', dormfixs)


// 插入数据
var data1 = {
    dormNum: "3-556",
    callNum: "16602803351",
    userDescr: "This is descriptions！",
    findDate: "2018-05-16 22:10:10",
    state: 3,
    adminLog: "This is admin log!",
    admingUpdateTime: new Date().toString()
}

// DormFixInsert(data1,(err,ret)=>{
//     console.log(ret)
// })

function DormFixInsert(data, callback) {
    try {
        console.log(data)
        var opera = new dormfix(data)

        opera.save((err, ret) => {
            if (err) {
                console.log("插入失败！")
                callback(false, "插入失败！")
            } else {
                console.log("插入成功！", ret.dormNum)
                callback(true, "插入成功！")
                // 给工作人员发送邮件
                var sendData = {
                    from: "UESTC NETUNION 940306566@qq.com",
                    to: "940306566@qq.com", // 收件人
                    subject: ret.dormNum + "有一个报修！",
                    html: "<b>用户故障描述是：" + ret.userDescr + "<br/>联系电话" + ret.callNum + "<br/>用户故障发现的时间：" + ret.findDate + "</b>",
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
    } catch (e) {
        callback(false, "异常！")
    }
}




// 查询各个状态的数据总条数
async function DormFixStateCount(callback) {
    try {
        var stateArr = []
        await dormfix.find({ state: 0 }).countDocuments((err, ret) => {
            if (err) stateArr.push("获取失败")
            else stateArr.push(ret)
        })
        await dormfix.find({ state: 1 }).countDocuments((err, ret) => {
            if (err) stateArr.push("获取失败")
            else stateArr.push(ret)
        })
        await dormfix.find({ state: 2 }).countDocuments((err, ret) => {
            if (err) stateArr.push("获取失败")
            else stateArr.push(ret)
        })
        await dormfix.find({ state: 3 }).countDocuments((err, ret) => {
            if (err) {
                stateArr.push("获取失败")
            }
            else stateArr.push(ret)
        })

        // 一个天坑，等回头了解了 async await 再说!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        await dormfix.find({ state: 4 }).countDocuments((err, ret) => {
            if (err) {
                stateArr.push("获取失败")
            }
            else stateArr.push(ret)
            
        })

        await callback(true, stateArr)

    } catch (e) {
        callback(false, "异常！")
    }
}



// 根据 state 查询 Dormfixs dormNum 字段
function DormFixList(state, callback) {
    try {
        dormfix.find({
            state: state,
        }, ['dormNum'], function (err, ret) {
            // console.log(ret)
            if (err) callback(false, err)
            else callback(true, ret)
        })
    } catch (e) {
        callback(false, "异常")
    }
}



// 根据 id 查询表中的详细数据
function DormFixDetail(id, callback) {
    try {
        dormfix.find({
            _id: id,
        }, function (err, ret) {
            if (err) callback(false, err)
            else callback(true, ret)
        })
    } catch (e) {
        callback(false, "异常")
    }
}


// 根据 id 更改状态
function DormFixUpdateState(id,updateValue, callback) {
    try {
        dormfix.updateOne({
            _id: id,
        },{
            state:updateValue
        }, function (err, ret) {
            if (err) callback(false, err)
            else callback(true, ret)
        })
    } catch (e) {
        callback(false, "异常")
    }
}

// DormFixStateCount((b,arr)=>{
//     console.log(arr.length)
//     console.log(arr)
// })


module.exports = {
    DormFixInsert: DormFixInsert,
    DormFixList: DormFixList,
    DormFixDetail: DormFixDetail,
    DormFixStateCount: DormFixStateCount,
    DormFixUpdateState:DormFixUpdateState
}