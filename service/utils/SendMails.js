const nodemailer = require('nodemailer')

function sendMail(sendUserName,passKey,sendData,file){
    var transport = nodemailer.createTransport({
        host:"smtp.qq.com", // 主机
        secureConnection:true,
        port:465,
        auth:{
            user:sendUserName,
            pass:passKey
        } 
    })
    transport.sendMail(sendData, function(err,response){
        if (err) console.log(err)
        else console.log(response)
    })
}

module.exports = {
    sendMail:sendMail
}