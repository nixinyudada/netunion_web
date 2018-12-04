import React from "react";
import "./index.css";
import { Row, Col, Input, Icon, Button, AutoComplete,message } from "antd";
import "animate.css"


export default class HeaderNav extends React.Component {
    state = {
      dataSource: ['网络维护', '网络报修', '加入我们', '意见反馈', '网速测试', '培训'],
      inputValue: ""
  }
  


  // 每一秒变动一次动画方式的netunion logo
  changeAnimate = () => {
    let arr = ["bounce", "pulse", "tada", "jello"]
    let i = 0;
    this.timerID = setInterval(() => {
      this.setState({
        animate: arr[i]
      })
      i++;
      if (i > 3) {
        i = 0;
      }
    }, 1000)
  }


  // 将输入的内容储存到state
  handleSearch = (value) => {
    // console.log(value)
    this.setState({
      inputValue: value
    })
  }

  // 获取此刻input输入框中的值
  handleGetSearch = () => {
    message.info("你搜索的内容:"+this.state.inputValue)
    //alert(this.state.inputValue)
  }
  // 将选中的内容储存到state
  handleSelect = (value) => {
    this.setState({
      inputValue: value
    })
    // console.log("select:" + value)
  }
  // 组件加载时执行这个方法
  componentWillMount(){
    this.changeAnimate();
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className="nav">
        <Row>
          <Col lg={{ span: 2, offset: 1 }} xs={{ span: 7, offset: 1 }}>
            <div className="imgDiv">
              {/* <img src="./../../../img/nuer.png" alt="nuer" className={`animated infinite ${this.state.animate}`} /> */}
              <img src="https://nixinyudada.github.io/netunion_web/img/nuer.png" alt="nuer" className={`animated infinite ${this.state.animate}`} />
              <p className="UnionTitle">UESTC <br /> 网管会</p>
            </div>
          </Col>
          <Col xs={{ span: 2, offset: 12 }} lg={{ span: 0 }}>
            <Button className="xsMoreBtn" >三</Button>
          </Col>

          <Col lg={{ span: 6, offset: 2 }} sm={{ span: 0 }} xs={{ span: 0 }} >
            <a href="http://www.is.uestc.edu.cn/" target="view_window"><img style={{ width: "100%", height: "30px", margin: "15px 0px" }} src="http://www.is.uestc.edu.cn/assets/img/logo3-default.png" alt="电子科技大学信息与软件学院" /></a>
          </Col>

          <Col lg={{ span: 5, offset: 2 }} sm={{ span: 0 }} xs={{ span: 0 }}>
            <div className="search">
              <AutoComplete
                dataSource={dataSource}
                placeholder="搜索"
                onSelect={this.handleSelect}
                onSearch={this.handleSearch}
                children={<Input suffix={<Icon type="search" onClick={this.handleGetSearch} />} />}
                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              />
            </div>
          </Col>

          <Col lg={{ span: 2, offset: 2 }} xs={{span:0}} sm={{span:0}} style={{ lineHeight: "60px" }}>
            <a href="http://www.baidu.com" style={{ color: "#00a4dd" }}>网络报修 <Icon type="tool" /></a>
          </Col>
          

        </Row>
      </div>
    );
  }
}
