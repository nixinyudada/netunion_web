// 获取id
function get_id(id_str){
    var id = document.getElementById(id_str);
    return id;
}

// 时间格式
function formateData(time){
    if(!time){
        return "";
    
    }
    let date = new Date(time);
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + 
    date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}  