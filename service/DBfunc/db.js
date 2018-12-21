const mongoose = require('mongoose')

// 1. 连接数据库

mongoose.connect('mongodb://localhost/NetUnion',{useNewUrlParser: true})

// 2. 设计集合结构

const CommitDB = new mongoose.Schema({
    dormNumber:{
        type:String,
    },
    callNumber:{
        type:String,
    },
    StateDescription:{
        type:String, 
    },
    repairDate:{
        type:String,
    }
})

// 3. 将文档结构发布为模型

const db = mongoose.model('RepairDB',CommitDB)

module.exports = db