const express = require('express')
const session = require("express-session") 
var bodyParser = require('body-parser')
const Router = require('./Router/router')

const app = express()

// session
var identityKey = 'skey';
app.use(session({
    name: identityKey,
    secret: 'chyingp',  // 用来对session id相关的cookie进行签名
    saveUninitialized: true,  // 是否自动保存未初始化的会话，建议false
    resave: true,  // 是否每次都重新保存会话，建议false
    cookie: {
        maxAge: 10 * 1000  // 有效期，单位是毫秒
    }
}));


// 解析客户端 POST 提交数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




// 挂载路由
app.use(Router)

app.listen(3000,()=>{
    console.log('服务器启动成功...')
})

