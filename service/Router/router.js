const express = require('express')
var svgCaptcha = require('svg-captcha')
const addRepair = require('./../DBfunc/addRepair')
const getRepair = require('./../DBfunc/getRepair')
const User = require('./../DBfunc/User')

var router = express.Router()
var LogincaptchaCode = ""
var dormFixCaptchaCode = ""

let isLogin = false
router.get('/repairList',(req,res)=>{
    getRepair((ret)=>{
        res.jsonp(ret)
    })
    
})

router.post('/addRepair',(req,res)=>{
    addRepair(req.body,(msg)=>{
        res.send('数据插入'+msg+'！')
    })
})

router.get('/changeCaptcha',(req,res)=>{
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
})

// 验证码是否正确？
router.post('/captcha',(req,res)=>{
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
})


// 登录接口
router.post('/loginify',(req,res)=>{
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

router.get('/dormFixCaptchaImg',(req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    let codeConfig = {
        size: 5,// 验证码长度
        ignoreChars: '0o1i', // 验证码字符中排除 0o1i
        noise: 2, // 干扰线条的数量
        height: 44 
    }
    let captcha = svgCaptcha.create(codeConfig);
    dormFixCaptchaCode = captcha.text.toLowerCase()
    res.jsonp({
        "img":captcha.data
    })
})


// 导出 router

module.exports = router