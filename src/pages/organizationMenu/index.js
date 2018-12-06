import React from "react"
import "./index.css"



export default class OrganizationMenu extends React.Component {
    
    handleAnimateMenu = (num) => {
        let menuUl = this.refs.menuUL
        let menuLi = this.refs.menuUL.getElementsByTagName("li");

        // 子菜单数量
        let total = menuLi.length;
        let widthX = menuUl.offsetWidth;
        // 圆形半径 radui
        let radius = widthX / 2;

        let arr = [0,90, 270, 60,180, 90,0, 180, 60,270,60,90, 270, 90,180,0,90, 270, 60,0];

        //console.log(num);
        // 圆形菜单的 起始 角度和 终止 角度
        let startAngle = arr[num];
        let endAngle = 360;

        // 两个子菜单之间的夹角
        let gap = (endAngle - startAngle) / total;
        // 计算各个子菜单之间的位置
        for (let i = 0; i < total; i++) {
            // 当前子菜单与x轴正向的夹角 θ (角度 -> 弧度) 计算出弧度  : 由于 Math.cos() & Math.sin()
            // 接收的参数值是 弧度 而非 角度
            let myAngle = (startAngle + gap * i) * (Math.PI / 180);  // θ

            // 计算出当前子菜单相对于左上角(0,0)的坐标 (x,y)
            let myX = radius + radius * Math.cos(myAngle); // x = r + rcos(θ)
            let myY = radius + radius * Math.sin(myAngle); // y = r + rsin(θ)

            menuLi[i].style.left = myX - 25 + "px";
            menuLi[i].style.top = myY - 25 + "px";
        }
    }

   
    handleStartAnimateMenu = () => {
        let speed = 1200;
        let i = 0;
        this.time = setInterval(() => {
            this.handleAnimateMenu(i);
            i++;
            if(i > 19){
                i = 0;
            }
        }, speed);

    }
    handleStopAnimateMenu = () => {
        clearInterval(this.time)
    }

   componentWillUnmount(){
       clearInterval(this.time)
   }
    render() {
        this.handleStartAnimateMenu();
        return (
            <div>
                <div className="menu" onClick={this.handleStopAnimateMenu} ref="menuUL">
                    <ul>
                        <li style={{background:"orange"}}>
                            <a style={{color:"white"}} href="http://www.baidu.com">运维部</a>
                        </li>
                        <li><a href="http://www.baidu.com" style={{lineHeight:"25px",color:"white"}}>网络管理员</a></li>
                        <li><a href="http://www.baidu.com" style={{lineHeight:"25px",color:"white"}}>系统管理员</a></li>
                        <li style={{lineHeight:"25px",background:"orange"}}><a style={{color:"white"}} href="http://www.baidu.com">研发部</a></li>
                        <li><a href="http://www.baidu.com" style={{color:"white"}}>JAVA</a></li>
                        <li><a href="http://www.baidu.com" style={{color:"white"}}>PHP</a></li>
                        <li><a href="http://www.baidu.com" style={{color:"white"}}>Web前端</a></li>
                        <li><a href="http://www.baidu.com" style={{lineHeight:"25px",color:"white"}}>UI/视觉设计</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}