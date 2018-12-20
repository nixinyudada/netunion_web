const express = require('express')
var svgCaptcha = require('svg-captcha')
const User = require('./../DBfunc/User')

const DormFix = require('./../DBfunc/DormFixDB')

var router = express.Router()
var LogincaptchaCode = ""
var dormFixCaptchaCode = ""
var isLogin = false
router.get('/changeCaptcha',(req,res)=>{
    try{
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
            "img":captcha.data
        })
    }catch(e){
        res.jsonp({
            "img":"异常"
        })
    }
})

// 验证码是否正确？
router.post('/captcha',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin","*")
    let clientCaptch = req.body
    if (LogincaptchaCode === clientCaptch.captcha){
        res.jsonp({
            "captcha":true
        })
    }else{
        res.jsonp({
            "captcha":false
        })
    }
    }catch(e){
        res.jsonp({
            "captcha":false
        })
    }
})


// 登录接口
router.post('/loginify',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin","*")
    User.login(req.body,(bool,str)=>{
        if(bool){
            isLogin = true
        }
        res.send({
            msg:str,
            bool:bool
        })
    })
    }catch(e){
        res.send({
            msg:"异常",
            bool:false
        })
    }
})

// 是否登录的 session

router.get('/loginSession',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    req.session.isLogin = isLogin
        res.send({
            loginSession:req.session.isLogin,
        })
})





// 报修

// 提交故障报修的验证码
router.get('/dormFixCaptchaImg',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin","*")
    let codeConfig2 = {
        size: 5,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44 
    }
    let captcha2 = svgCaptcha.create(codeConfig2);
    dormFixCaptchaCode = captcha2.text.toLowerCase()
    if(captcha2){
        res.jsonp({
            "img":captcha2.data
        })
    }else{
        
    }
    }catch(e){
        res.jsonp({
            "img":"异常！"
        })
    }
    
})

router.post('/dormFixCaptchaText',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin","*")
    if (req.body.captchaText === dormFixCaptchaCode){
        var data = {
            dormNum:req.body.dormNum,
            callNum:req.body.callNum,
            userDescr:req.body.userDescr,
            findDate:req.body.findDate,
            state:req.body.state,
            adminLog:req.body.adminLog,
            admingUpdateTime:req.body.admingUpdateTime
        }

        DormFix.DormFixInsert(data,(bool,msg)=>{
            res.jsonp({
                "codeify":true,
                "msg":msg,
                "msgBool":bool
            })
        })

    }else{
        res.jsonp({ "codeify":false })
    }
    }catch(e){
        res.send({
            "msg":"异常！",
            "msgBool":false
        })
    }
    
})



router.post('/dormFixInsert',(req,res)=>{
    try{
        res.setHeader("Access-Control-Allow-Origin","*")

    var data1 = {
        dormNum:"3-556",
        callNum:"16602803351",
        userDescr:"This is descriptions！",
        findDate:"2018-05-16 22:10:10",
        state:0,
        adminLog:"This is admin log!",
        admingUpdateTime:new Date()
    }


    DormFix.DormFixInsert(data1,(bool,msg)=>{
        res.jsonp({
            "msg":msg,
            "msgBool":bool
        })
    })
    }catch(e){
        res.jsonp({
            "msg":"异常",
            "msgBool":false
        })
    }
    
   
})



// 导出 router

module.exports = router