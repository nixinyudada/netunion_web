// 显示logo及网管会文字介绍
function show_logo(){
    var id = get_id('showLogo');
    var logo = get_id('show_big_logo')
    var text = get_id('text');
    var before_logo = get_id('before_logo');
    before_logo.style.display = 'none';
    id.style.width = '100%';
    id.style.height = '100%';
    logo.style.display = 'block';
    setTimeout(function(){
        text.style.display = 'block';
    },1000);
}
// 隐藏logo及网管会文字介绍
function hidden_logo(){
    var id = get_id('showLogo');
    var text = get_id('text');
    var before_logo = get_id('before_logo');
    before_logo.style.display = 'block';
    id.style.width = '0%';
    id.style.height = '0%';
    var logo = get_id('show_big_logo')
    logo.style.display = 'none';
    text.style.display = 'none';
}

// 显示其他网管会功能按钮
function show_button(){
    var id = get_id('nav_curtain');
    id.style.display == 'block'?id.style.display = 'none':id.style.display = 'block';
}

window.onload = function(){
    var text = get_id('text');
    //console.log(text.style.marginTop)
    text.style.top = (this.innerHeight - 300) / 2 + 'px';
    text.style.left = (this.innerWidth - 150) / 2 + 'px';
    var nav = get_id('nav');
    window.onscroll = function(){
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t==0){
            nav.style.borderBottom = '0px solid #000';
            nav.style.boxShadow = '0px 0px 0px #000';
            nav.style.background = 'rgba(0,0,0,0)';
            //console.log(t)
        }else{
            //console.log(t)
            nav.style.borderBottom = '1px solid #000';
            nav.style.boxShadow = '0px 0px 5px #000';
            nav.style.background = 'rgba(0,0,0,0.1)';
        }
        
        // 获取三个 li 职位 id
        var job_img_1 = get_id("job_img_1");
        var job_img_2 = get_id("job_img_2");
        var job_img_3 = get_id("job_img_3");
        //var job_img_4 = get_id("job_img_4");
        var job_text_1 = get_id("job_text_1");
        var job_text_2 = get_id("job_text_2");
        var job_text_3 = get_id("job_text_3");
        //var job_text_4 = get_id("job_text_4");

        // 牛人介绍 样式动态改变
        function memberShow_1(){
            job_img_1.style.borderRadius = "50%";
            job_img_1.style.borderColor = "orange";
            job_img_1.style.width = "130px";
            job_img_1.style.height = "130px";
            job_text_1.style.height = "40px";
            job_text_1.style.lineHeight = "40px";
            job_text_1.style.fontSize = "16px";
        }
        function memberShow_2(){
            job_img_2.style.borderRadius = "50%";
            job_img_2.style.borderColor = "orange";
            job_img_2.style.width = "130px";
            job_img_2.style.height = "130px";
            job_text_2.style.height = "40px";
            job_text_2.style.lineHeight = "40px";
            job_text_2.style.fontSize = "16px";
        }
        function memberShow_3(){
            job_img_3.style.borderRadius = "50%";
            job_img_3.style.borderColor = "orange";
            job_img_3.style.width = "130px";
            job_img_3.style.height = "130px";
            job_text_3.style.height = "40px";
            job_text_3.style.lineHeight = "40px";
            job_text_3.style.fontSize = "16px";
        }

        function memberDefaultStyle(){

            job_img_1.style.borderRadius = "";
            job_img_1.style.borderColor = "";
            job_img_1.style.width = "";
            job_img_1.style.height = "";
            job_text_1.style.height = "";
            job_text_1.style.lineHeight = "";
            job_text_1.style.fontSize = "";

            job_img_2.style.borderRadius = "";
            job_img_2.style.borderColor = "";
            job_img_2.style.width = "";
            job_img_2.style.height = "";
            job_text_2.style.height = "";
            job_text_2.style.lineHeight = "";
            job_text_2.style.fontSize = "";

            job_img_3.style.borderRadius = "";
            job_img_3.style.borderColor = "";
            job_img_3.style.width = "";
            job_img_3.style.height = "";
            job_text_3.style.height = "";
            job_text_3.style.lineHeight = "";
            job_text_3.style.fontSize = "";
            
        }

        if(t>1420 && t < 1650){
            memberShow_1();
        }else if(t > 1650 && t < 1870){
            memberShow_2();
        }else if(t > 1870){
            memberShow_3();
        }

        if(t < 730){
            memberDefaultStyle();
        }
    }
    
   
}