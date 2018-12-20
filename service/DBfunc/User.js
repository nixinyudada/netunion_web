const mongoose = require('mongoose')

// 1. 连接数据库

mongoose.connect('mongodb://localhost/NetUnion', { useNewUrlParser: true })
var users = new mongoose.Schema({
    username: String,
    password: String
})
const user = mongoose.model('User', users)

function login(clientData, callback){
    var findStr = clientData.userName
    user.find({
        username: findStr
    }, function(err, ret){
        try{
            if (err) {
                callback(false,"查询失败！")
                return false;
            } 
            if (ret.length !== 0) {
                if (clientData.password === ret[0]["password"]) {
                    callback(true,"登录成功！")
                }
                if (clientData.password !== ret[0]["password"]){
                    callback(false,"密码错误")
                }
            }else{
                callback(false,"没有这个用户名！ 用户名输入错误！")
            } 
        }catch(e){
            callback(false,"查询失败！")
        } 
        
        
    })
}

// user.find((err,ret)=>{
//     console.log(ret)
// })


module.exports = {
    login:login
}

