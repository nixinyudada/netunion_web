// 成员相册
var member_photo_btn = get_id("member_photo_btn");
var close_photo_btn = get_id("close_photo_btn");
var photo = get_id("photo");
var member_img = get_id("member_img");
var p_i = 0;
			var img = member_img.getElementsByTagName("img");
			for(let i = 0;i < img.length;i++){
				img[i].addEventListener("click",function(){
                    show_big_img(this);
                    p_i = i;
            console.log(p_i)
				});
			}
			var big_img = get_id("big_img");
			var big_photo = get_id("big_photo");
		function show_big_img(id){
			big_img.src = id.src;
			big_photo.style.display = "block";
            console.log(big_img.src);
            photo.style.display = "none";
            
		}

        // 关闭浏览大图
		get_id("close_bigBox").onclick = function(){
            big_photo.style.display = "none";
            photo.style.display = "block";
		}


		// 成员相册
		

		close_photo_btn.onclick = function(){
            photo.className = "photo animated rollOut delay-2s";
            setTimeout(() => {
                photo.style.display = "none";
                photo.className = "photo";
            }, 1000);
        }
		member_photo_btn.onclick = function(){
            console.log("member_photo_btn");
			photo.style.display = "block";
			member_img.className = "animated rollIn delay-2s";
            setTimeout(() => {
                member_img.className = "";
            }, 1000);
        }

        // 成员相册 上一张 与 下一张
        var photo_left = get_id("photo_left");
        var photo_right = get_id("photo_right");
        var photo_arr = ["images/photoWall/1.jpg",
        "images/photoWall/2.jpg","images/photoWall/3.jpg",
        "images/photoWall/4.jpg","images/photoWall/5.jpg",
        "images/photoWall/6.jpg","images/photoWall/11.jpg",
        "images/photoWall/12.jpg","images/photoWall/13.jpg",
        "images/photoWall/14.jpg","images/photoWall/15.jpg",
        "images/photoWall/16.jpg",];
        
        photo_left.onclick = ()=>{
            if(p_i <= 0){
                return;
            }
            p_i--;
            big_img.src = photo_arr[p_i];
            console.log(p_i)
        }
        photo_right.onclick = ()=>{
            if(p_i >= 11){
                return;
            }
            p_i++;
            console.log(p_i)
            big_img.src = photo_arr[p_i];
        }