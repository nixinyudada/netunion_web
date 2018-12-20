import React from "react";
import $ from "jquery"
import "./index.css"
import {
    Breadcrumb, Icon, Tag, Badge, Row, Col, Button, Modal, Input,message,Spin
} from 'antd';
var timer = null;
export default class DormFixList extends React.Component {
    state = {
        DormFixID:"",
        visible: false,
        isDormFixOneDetail:false,

        isDormFixStateCount: false,
        dormFixStateCount: "",

        redLoadIcon: "none",
        redDisabled: false,
        redData: null,
        redIs: false,

        blueLoadIcon: "none",
        blueDisabled: false,
        blueData: null,
        blueIs: false,

        yellowLoadIcon: "none",
        yellowDisabled: false,
        yellowData: null,
        yellowIs: false,

        greenLoadIcon: "none",
        greenDisabled: false,
        greenData: null,
        greenIs: false,

        isDormFixDetail: false,
        dormFixDetail: null,
    };
   
    
    initDormFixStateCount = () => {
        let that = this
        $.ajax({
            url: "http://localhost:3000/DormFixListState",
            type: "get",
            success: function (ret) {
                that.setState({
                    dormFixStateCount: ret.msgArr,
                    isDormFixStateCount: true
                })
                // console.log(that.state.dormFixStateCount[2])
                // console.log(that.state.dormFixStateCount[1])
                // console.log(that.state.dormFixStateCount[3])
            },
            error: function (err) {

            }
        })
    }
    componentWillMount() {
        let that = this
        timer = setTimeout(()=>{
            that.initDormFixStateCount()
            },10)
    }

    componentWillUnmount(){
        clearInterval(timer)
    }

    handleGetData(stateDBID) {

        switch (stateDBID) {
            case 0:
                this.setState({
                    redLoadIcon: "inline-block",
                    redDisabled: true
                })
                break;
            case 1:
                this.setState({
                    blueLoadIcon: "inline-block",
                    blueDisabled: true
                })
                break;
            case 2:
                this.setState({
                    yellowLoadIcon: "inline-block",
                    yellowDisabled: true
                })
                break;
            case 3:
                this.setState({
                    greenLoadIcon: "inline-block",
                    greenDisabled: true
                })
                break;
                default:
                    this.setState({
                        redLoadIcon: "none",
        redDisabled: false,
        redData: null,
        redIs: false,

        blueLoadIcon: "none",
        blueDisabled: false,
        blueData: null,
        blueIs: false,

        yellowLoadIcon: "none",
        yellowDisabled: false,
        yellowData: null,
        yellowIs: false,

        greenLoadIcon: "none",
        greenDisabled: false,
        greenData: null,
        greenIs: false,

        isDormFixDetail: false,
        dormFixDetail: null
                    })
                break;

        }


        var that = this
        $.ajax({
            url: "http://localhost:3000/DormFixList?state=" + stateDBID,
            type: "get",
            success: function (ret) {
                if (ret.msg) {
                    switch (stateDBID) {
                        case 0:
                            that.setState({
                                redData: ret.data,
                                redIs: true,
                                redLoadIcon: "none",
                                redDisabled: false,

                                blueIs: false,
                                blueData: null,
                                blueDisabled: false,

                                yellowIs: false,
                                yellowData: null,
                                yellowDisabled: false,

                                greenData: null,
                                greenIs: false,
                                greenDisabled: false
                            })
                            break;
                        case 1:
                            that.setState({
                                blueData: ret.data,
                                blueIs: true,
                                blueLoadIcon: "none",
                                blueDisabled: false,

                                redIs: false,
                                redData: null,
                                redDisabled: false,

                                yellowIs: false,
                                yellowData: null,
                                yellowDisabled: false,

                                greenData: null,
                                greenIs: false,
                                greenDisabled: false
                            })
                            break;
                        case 2:
                            that.setState({
                                yellowData: ret.data,
                                yellowIs: true,
                                yellowLoadIcon: "none",
                                yellowDisabled: false,

                                blueIs: false,
                                blueData: null,
                                blueDisabled: false,

                                redIs: false,
                                redData: null,
                                redDisabled: false,

                                greenData: null,
                                greenIs: false,
                                greenDisabled: false
                            })
                            break;
                        case 3:
                            that.setState({
                                greenData: ret.data,
                                greenIs: true,
                                greenLoadIcon: "none",
                                greenDisabled: false,

                                blueIs: false,
                                blueData: null,
                                blueDisabled: false,

                                yellowIs: false,
                                yellowData: null,
                                yellowDisabled: false,

                                redIs: false,
                                redData: null,
                                redDisabled: false,
                            })
                            break;
                            default:
                            that.setState({
                                redLoadIcon: "none",
                redDisabled: false,
                redData: null,
                redIs: false,
        
                blueLoadIcon: "none",
                blueDisabled: false,
                blueData: null,
                blueIs: false,
        
                yellowLoadIcon: "none",
                yellowDisabled: false,
                yellowData: null,
                yellowIs: false,
        
                greenLoadIcon: "none",
                greenDisabled: false,
                greenData: null,
                greenIs: false,
        
                isDormFixDetail: false,
                dormFixDetail: null
                            })
                            break;
                    }

                } else {
                    Modal.error({
                        title: "数据获取失败了！"
                    })
                }
            },
            error: function (err) {

            }
        })


    }

    handleChangeDormFixState = (event) => {
        console.log(event.target.value)
        let that = this
        $.ajax({
            url: "http://localhost:3000/DormFixUpdateState",
            type: "post",
            data:{
                id:that.state.DormFixID,
                updateStateVal:event.target.value
            },
            success: function (ret) {
                if(ret.msg){
                    message.info("更新一个维护状态")
                    that.initDormFixStateCount()
                }
            },
            error: function (err) {

            }
        })
    }

    handleTag(id) {
       
        this.setState({
            visible: true,
            DormFixID:id,
            isDormFixOneDetail:false
        })
        let that = this
        $.ajax({
            url: "http://localhost:3000/DormFixWhere?id=" + id,
            type: "get",
            success: function (ret) {
                console.log(ret.data[0])
                that.setState({
                    isDormFixDetail: true,
                    dormFixDetail: ret.data[0],
                    isDormFixOneDetail:true
                })
                console.log(that.state.dormFixDetail.state)
            },
            error: function (err) {

            }
        })



    }
    hideModal = () => {
        this.setState({
            visible: false
        })
    }




    render() {
        return (
            <div>
                <Modal
                    title="报修信息"
                    visible={this.state.visible}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                <Spin spinning={!this.state.isDormFixOneDetail}>
                    <p>宿舍号：{this.state.isDormFixDetail ? this.state.dormFixDetail.dormNum : null}</p>
                    <p>联系方式：{this.state.isDormFixDetail ? this.state.dormFixDetail.callNum : null}</p>
                    <p>故障描述：{this.state.isDormFixDetail ? this.state.dormFixDetail.userDescr : null}</p>
                    <p>故障日期：{this.state.isDormFixDetail ? this.state.dormFixDetail.findDate : null}</p>
                    <p>故障状态：</p>
                        {/* <Select value="" id="seTest" onChange={this.handleChangeDormFixState}>
                            <Select.Option value="0">已读</Select.Option>
                            <Select.Option value="1">未读</Select.Option>
                            <Select.Option value="2">已解决</Select.Option>
                            <Select.Option value="3">未解决</Select.Option>
                        </Select> */}
                        <select value={this.state.isDormFixDetail ? this.state.dormFixDetail.state : ""} onChange={this.handleChangeDormFixState} id="seTest">
                            <option value="0">未读</option>
                            <option value="1">已读</option>
                            <option value="2">故障未解决</option>
                            <option value="3">故障已解决</option>
                        </select>
                    <p>管理日志：</p>
                    <p><Input defaultValue={this.state.isDormFixDetail ? this.state.dormFixDetail.adminLog : ""}/></p>
                    <p><Button>添加日志</Button></p>
                    <p>最近修改：{this.state.isDormFixDetail ? this.state.dormFixDetail.admingUpdateTime : null}</p>
                    <p>

                    </p>
                    </Spin>
                </Modal>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="tool" />
                        <span>寝室报修信息</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                <h4 style={{ marginBottom: "10px" }}>寝室故障报修情况</h4>

                <Row>
                    <Col lg={{ span: 16 }}>
                        {
                            this.state.redIs ? this.state.redData.map((item, key) => {
                                return <Tag color="red" style={{ margin: "4px 8px" }} key={key} onClick={this.handleTag.bind(this, item._id)}>{item.dormNum}</Tag>
                            }) : false
                        }

                        {
                            this.state.blueIs ? this.state.blueData.map((item, key) => {
                                return <Tag color="blue" style={{ margin: "4px 8px" }} key={key} onClick={this.handleTag.bind(this, item._id)}>{item.dormNum}</Tag>
                            }) : false
                        }

                        {
                            this.state.yellowIs ? this.state.yellowData.map((item, key) => {
                                return <Tag color="gold" style={{ margin: "4px 8px" }} key={key} onClick={this.handleTag.bind(this, item._id)}>{item.dormNum}</Tag>
                            }) : false
                        }

                        {
                            this.state.greenIs ? this.state.greenData.map((item, key) => {
                                return <Tag color="green" style={{ margin: "4px 8px" }} key={key} onClick={this.handleTag.bind(this, item._id)}>{item.dormNum}</Tag>
                            }) : false
                        }
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <Badge count={this.state.isDormFixStateCount ? this.state.dormFixStateCount[0] : "..."} style={{ background: "#fb1b32" }} className="dorm-fix-btn">
                            <Button disabled={this.state.redDisabled} onClick={this.handleGetData.bind(this, 0)}><Icon style={{ display: this.state.redLoadIcon }} type="loading" />获取</Button>

                        </Badge>
                        <br />

                        <Badge count={this.state.isDormFixStateCount ? this.state.dormFixStateCount[1] : "..."} style={{ background: "#0892f8" }} color="processing" className="dorm-fix-btn">
                            <Button disabled={this.state.blueDisabled} onClick={this.handleGetData.bind(this, 1)}><Icon style={{ display: this.state.blueLoadIcon }} type="loading" />获取</Button>
                        </Badge>
                        <br />
                        <Badge count={this.state.isDormFixStateCount ? this.state.dormFixStateCount[2] : "..."} style={{ background: "#fdac3d" }} color="warning" className="dorm-fix-btn">
                            <Button disabled={this.state.yellowDisabled} onClick={this.handleGetData.bind(this, 2)}><Icon style={{ display: this.state.yellowLoadIcon }} type="loading" />获取</Button>

                        </Badge>
                        <br />
                        <Badge count={this.state.isDormFixStateCount ? this.state.dormFixStateCount[3] : "..."} style={{ background: "#52c41a" }} className="dorm-fix-btn">
                            <Button disabled={this.state.greenDisabled} onClick={this.handleGetData.bind(this, 3)}><Icon style={{ display: this.state.greenLoadIcon }} type="loading" />获取</Button>
                        </Badge>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <Badge status="error" />
                        <Badge status="success" />
                        <Badge status="processing" />
                        <Badge status="warning" />
                        <br />
                        <Badge status="error" text="消息未读" />
                        <br />
                        <Badge status="processing" text="消息已读" />
                        <br />
                        <Badge status="warning" text="故障未解决" />
                        <br />
                        <Badge status="success" text="故障已解决" />
                        <br />
                    </Col>
                </Row>
            </div>
        )
    }
}