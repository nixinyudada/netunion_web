const express = require('express')
var svgCaptcha = require('svg-captcha')
const User = require('./../DBfunc/User')

const DormFix = require('./../DBfunc/DormFixDB')

var router = express.Router()
var LogincaptchaCode = ""
var dormFixCaptchaCode = ""
var isLogin = false
router.get('/changeCaptcha', (req, res) => {
    try {
        let codeConfig = {
            size: 5,// 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            height: 44
        }
        let captcha = svgCaptcha.create(codeConfig);
        req.session.captcha = captcha.text.toLowerCase()
        // console.log(req.session.captcha)
        LogincaptchaCode = captcha.text.toLowerCase()
        res.jsonp({
            "img": captcha.data
        })
    } catch (e) {
        res.jsonp({
            "img": "异常"
        })
    }
})

// 验证码是否正确？
router.post('/captcha', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        let clientCaptch = req.body
        if (LogincaptchaCode === clientCaptch.captcha) {
            res.jsonp({
                "captcha": true
            })
        } else {
            res.jsonp({
                "captcha": false
            })
        }
    } catch (e) {
        res.jsonp({
            "captcha": false
        })
    }
})


// 登录接口
router.post('/loginify', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        User.login(req.body, (bool, str) => {
            if (bool) {
                isLogin = true
            }
            res.send({
                msg: str,
                bool: bool
            })
        })
    } catch (e) {
        res.send({
            msg: "异常",
            bool: false
        })
    }
})

// 是否登录的 session

router.get('/loginSession', (req, res) => {
    try{
        res.setHeader("Access-Control-Allow-Origin", "*")
        req.session.isLogin = isLogin
        res.send({
            loginSession: req.session.isLogin,
        })
    }catch(e){
        res.send({
            loginSession: "异常",
        })
    }
})





// 报修

// 提交故障报修的验证码
router.get('/dormFixCaptchaImg', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        let codeConfig2 = {
            size: 5,// 验证码长度
            ignoreChars: '0o1i', // 验证码字符中排除 0o1i
            noise: 2, // 干扰线条的数量
            height: 44
        }
        let captcha2 = svgCaptcha.create(codeConfig2);
        dormFixCaptchaCode = captcha2.text.toLowerCase()
        if (captcha2) {
            res.jsonp({
                "img": captcha2.data
            })
        } else {

        }
    } catch (e) {
        res.jsonp({
            "img": "异常！"
        })
    }

})

router.post('/dormFixCaptchaText', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        if (req.body.captchaText === dormFixCaptchaCode) {
            var data = {
                dormNum: req.body.dormNum,
                callNum: req.body.callNum,
                userDescr: req.body.userDescr,
                findDate: req.body.findDate,
                state: req.body.state,
                adminLog: req.body.adminLog,
                admingUpdateTime: req.body.admingUpdateTime
            }

            DormFix.DormFixInsert(data, (bool, msg) => {
                res.jsonp({
                    "codeify": true,
                    "msg": msg,
                    "msgBool": bool
                })
            })

        } else {
            res.jsonp({ "codeify": false })
        }
    } catch (e) {
        res.send({
            "msg": "异常！",
            "msgBool": false
        })
    }

})



router.post('/dormFixInsert', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")

        var data1 = {
            dormNum: "3-556",
            callNum: "16602803351",
            userDescr: "This is descriptions！",
            findDate: "2018-05-16 22:10:10",
            state: 0,
            adminLog: "This is admin log!",
            admingUpdateTime: new Date()
        }


        DormFix.DormFixInsert(data1, (bool, msg) => {
            res.jsonp({
                "msg": msg,
                "msgBool": bool
            })
        })
    } catch (e) {
        res.jsonp({
            "msg": "异常",
            "msgBool": false
        })
    }


})




// 获取各个状态的数据
router.get('/DormFixListState', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        DormFix.DormFixStateCount((msgBool, msgArr) => {
            if (msgBool) {
                console.log(msgArr)
                res.send({
                    msgBool:msgBool,
                    msgArr:msgArr
                })
            } else {
                res.send({
                    msgBool:false,
                    msgArr:["!","!","!","!"]
                })
            }
        })

    } catch (e) {
        res.send("异常！")
    }
})


// 获取数据库中不同 state 的数据

router.get('/DormFixList', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        DormFix.DormFixList(req.query.state, (msgBool, msg) => {
            if (msgBool) {
                // 模拟网络延迟
                setTimeout(()=>{
                    res.send({
                        msg:true,
                        data:msg
                    })
                },500)
            } else {
                res.send({
                    msg:"查询失败！",
                    data:null
                })
            }
        })

    } catch (e) {
        res.send("异常！")
    }
})

// 根据 id 查询详细数据
router.get('/DormFixWhere', (req, res) => {
    try {
        res.setHeader("Access-Control-Allow-Origin", "*")
        let id = req.query.id
        console.log(id)
        
        DormFix.DormFixDetail(id,(msgBool,ret)=>{
            if (msgBool) {
                setTimeout(()=>{
                    res.send({
                        msg:true,
                        data:ret
                    })
                },2000)
            } else {
                res.send({
                    msg:"查询失败！",
                    data:null
                })
            }
        })
    } catch (e) {
        res.send("异常！")
    }
})


// 更改故障报修的维护状态

router.post('/DormFixUpdateState',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin", "*")
        console.log(req.body.id)
        console.log(req.body.updateStateVal)

        DormFix.DormFixUpdateState(req.body.id,req.body.updateStateVal,(msgBool,msg)=>{
            if(msgBool){
                res.send({
                    msg:true
                })
            }else{
                res.send({
                    msg:false
                })
            }
        })
    }catch(e){
        console.log("异常")
        res.send({
            msg:"异常"
        })
    }
})

// 导出 router

module.exports = router