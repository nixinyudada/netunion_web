var joinUsBack = get_id("joinUsBack");
var joinUsCommit = document.getElementById("joinUsCommit");
var joinUs = document.getElementById("joinUs");
var joinUsBtn = document.getElementById("joinUsBtn");

// 表单数据内容
var jName = document.getElementById("jName");
var jSchool = document.getElementById("jSchool");
var jSpeciality = document.getElementById("jSpeciality");
var jSchoolNumber = document.getElementById("jSchoolNumber");
var jE_Mail = document.getElementById("jE_Mail");
var jTellPhone = document.getElementById("jTellPhone");
var jJob = document.getElementById("jJob");
var jSex = document.getElementById("jSex");
var j_personal_information = document.getElementById("j_personal_information");




postData = () => {
    var id = Math.floor(Math.random()*100000);
    var sendData = {
        "id": "123dasd&wq%wEer#daw" + id,
        "name": jName.value,
        "college": jSchool.value,
        "speciality": jSpeciality.value,
        "studentID": jSchoolNumber.value,
        "EMail": jE_Mail.value,
        "phoneNumber": jTellPhone.value,
        "job": jJob.value,
        "sex": jSex.value,
        "personalInfo": j_personal_information.value
    }
   
    $.ajax({
        type:"post",
        url:"http://localhost:3000/users",
        async:false,
        dataType:"json",
        data:sendData,
        success:function(data){
            console.log(data)
            submitFunc(data)
        },
        error:function(error){
            console.log(error.statusText)
        }
    });
}

//  提交按钮点击数据提交状态响应
submitFunc = (dataState) => {
    joinUsCommit.setAttribute("disabled","disabled")
    if(dataState){
        alert("提交成功");
        joinUsCommit.removeAttribute("disabled");
        joinUs.className = "joinUs animated bounceOutUp";
    setTimeout(() => {
        joinUs.className = "joinUs animated bounceInUp";
        joinUs.style.display = "none";
    }, 1000);
    }else{
        alert("提交失败！")
        joinUsCommit.removeAttribute("disabled")
    }
}



// 弹出 joinUs 表单输入框
joinUsBtn.onclick = () => {
    joinUs.style.display = "block";
    setTimeout(() => {
        var v = setInterval(() => {
            if (joinUs.scrollTop > 1) {
                joinUs.scrollTop -= 3;
            } else {
                clearInterval(v);
            }
        }, 1);
    }, 1200);
}


joinUsBack.onclick = () => {
    joinUs.className = "joinUs animated bounceOutUp";
    setTimeout(() => {
        joinUs.className = "joinUs animated bounceInUp";
        joinUs.style.display = "none";
    }, 1000);

}


// 提交输入的数据，同时调用验证函数
joinUsCommit.onclick = () => {
    // 闯关的验证小将
//    var xiaojiao = true;

//    xiaojiao = jNameIfy();

    // if(xiaojiao){
    //     // 验证成功！ 
    //     // ajax 提交数据
    // }
    console.log("postData!")
    postData();
}


jName.onchange = ()=>{
    console.log("change");
    var b = jNameIfy();
    if(b){
        jName.style.border = "2px solid green";
        jName.style.boxShadow = "0px 0px 10px green";
        document.getElementById("jName_text").className = "inputClass";
    }else{
        jName.style.border = "2px solid red";
        jName.style.boxShadow = "0px 0px 10px red";
        document.getElementById("jName_text").className = "inputClass animated jello infinite";
    }
    
}

// 表单填写错误提示框
var joinUsErrorAlert_content = document.getElementById("joinUsErrorAlert_content");
var joinUsErrorAlert = document.getElementById("joinUsErrorAlert");
function joinUsErrorAlert_func(alert_str){
    joinUsErrorAlert.style.display = "block";

    var i = 0;
    var alert_v = setInterval(()=>{
        joinUsErrorAlert_content.innerHTML = alert_str.substring(0,i);
        i++;
        console.log(i);
        if(i > alert_str.length){
            clearInterval(alert_v);
        }
    },100);

    //joinUsErrorAlert_content.innerHTML = alert_str;
}
function joinUsErrorAlert_close_func(){
    joinUsErrorAlert.style.display = "none";
}


// 表单验证;
// 姓名验证
var jNameIfy = () => {
    // 获取姓名表单内容
    var jNameVal = jName.value;
    // 去掉所有空格
    jNameVal = jNameVal.replace(/\s+/g, "");
    console.log(jNameVal);
        // 基本判断
        if (jNameVal.length > 8 || jNameVal < 2 || jNameVal == "" || jNameVal == null) {
            console.log("false!");
            joinUsErrorAlert_func("请不要再表单中输入空字符串或是长度小于2大于8的字符串，谢谢！");
            return false;
        }
        // 特殊字符判断
        var rareStr = /[~!@#$%^&*()/\|,.<>?"'();:_+-=\[\]{}]/;
        if (rareStr.test(jNameVal)) {
            console.log("false!");
            joinUsErrorAlert_func("请不要在表单中输入特殊字符，谢谢！");
            return false;
        }
        return true;
}

// 学院验证

//专业验证

// 学号验证

// e-mail验证

// 电话验证

// 应聘职位验证

// 性别验证

// 个人介绍验证