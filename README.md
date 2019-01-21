### Node服务端

```
|--service
    |--DBfunc
        |--db.js            // nodejs与mongodb的连接范式
        |--DormFixDB.js    // 报修接口数据库持久层
        |--test.js        // 测试文件不用管
        |--User.js       // 用户登录持久层
    |--Router
        |--router.js   // 路由
    |--utils
        |--SendMails.js  // 邮件发送工具包，需要邮箱授权码
    |--app.js  // 主文件
```


### 启动服务端

`node app.js`

### 启动前端

`yarn start`

*注意：后端的启动端口必须是`3000`*