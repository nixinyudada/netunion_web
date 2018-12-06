var dormRepair = document.getElementById("dormRepair");

var dormRepairContent = document.getElementById("dormRepairContent");

var submitRepair = document.getElementById("submitRepair");

var repairSend = document.getElementById("repairSend");


// 表单数据
var dormID = document.getElementById("dormID");
var contactNum = document.getElementById("contactNum");
var statusDescribe = document.getElementById("statusDescribe");

// 报修关闭按钮(提交之后)
var repairClose_after = document.getElementById("repairClose");
// 报修关闭按钮(提交之前)
var closeRepair_before = document.getElementById("closeRepair");
// 提交成功
var repairSuccess = document.getElementById("repairSuccess");

    repairClose_after.onclick = () => {
        console.log("repairClose..")
        repairSuccess.style.display = "none";
        document.getElementById("repairUl").style.display = "block";
        repairSend.style.animation = "";
    } 
    closeRepair_before.onclick = () => {
        dormRepairContent.style.left = "-100%";
    }

dormRepair.onclick = () => {
    dormRepairContent.style.left = "0px";
}

// animation: sendRepair 2s linear 0.1s;
submitRepair.onclick = () => {
    var repairID = Math.floor(Math.random()*120000);
    var sendDate = formateData(new Date());
    var sendRepairData = {
        id:"repair"+repairID,
        dormNum:dormID.value,
        contactNum:contactNum.value,
        statusDescribe:statusDescribe.value,
        sendDate:sendDate,
        mainlog: "未填写",
        status: "0",
    }
    console.log("sendRepair")
    repairSend.style.animation = "sendRepair 2s linear 0.1s";
    $.ajax({
        url:"http://localhost:3000/repair",
        type:"post",
        async:false,
        dataType:"json",
        data:sendRepairData,
        success:function(result){
            setTimeout(()=>{
                repairSuccess.style.display = "block";
                document.getElementById("repairUl").style.display = "none";
            },2000);
        },
        error:function(error){
            setTimeout(()=>{
                repairSend.innerHTML = "发送失败！";
            },2000);
        }
    });
    
    
}