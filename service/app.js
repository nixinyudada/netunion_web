const express = require('express')
var bodyParser = require('body-parser')
const Router = require('./Router/router')

const app = express()

// 解析客户端 POST 提交数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 挂载路由
app.use(Router)

app.listen(3000,()=>{
    console.log('服务器启动成功...')
})

