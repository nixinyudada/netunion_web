const mongoose = require('mongoose')

// 1. 连接数据库

mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true })
var users = new mongoose.Schema({
    username: String,
    password: String
})
const user = mongoose.model('users', users)

function login(clientData, callback){
    var findStr = clientData.userName
    user.find({
        username: findStr
    }, (err, ret) => {
        if (err) {
            callback(false,"查询失败！")
        } else if (ret[0] === "" || ret[0] === null || ret[0] === undefined) {
            callback(false,"没有这个用户名！ 用户名输入错误！")
        } else if (clientData.password === ret[0]["password"]) {
            callback(true,"登录成功！")
        } else {
            callback(false,"密码错误")
        }
    })
}
module.exports = {
    login:login
}

