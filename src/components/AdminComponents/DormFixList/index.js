import React from "react";
import "./index.css"
import {
    Breadcrumb, Icon, Tag, Badge, Row, Col, Button, Modal
} from 'antd';

export default class DormFixList extends React.Component {
    state = {
        checked: true,
        loadIcon: "none",
        getDataBtnState: false,
        visible:false
    };

    handleGetData = () => {
        this.setState({
            loadIcon: "inline-block",
            getDataBtnState: true
        })
    }
    handleChangeTag = () => {
        this.setState({ checked: false });
    }
    handleTag = () => {
        this.setState({
            visible:true
        })
    }
    hideModal = () => {
        this.setState({
            visible:false
        })
    }
    render() {
        return (
            <div>
                <Modal
                    title={<span>报修信息&nbsp;&nbsp;<Icon style={{ display: this.state.loadIcon }} type='loading' /></span>}
                    visible={this.state.visible}
                    onCancel={this.hideModal}
                    okText="确认"
                    cancelText="取消"
                >
                    <p></p>
                    <p>宿舍号：</p>
                    <p>联系方式：</p>
                    <p>故障描述：</p>
                    <p>故障日期：</p>
                    <p>提交日期：</p>
                    <p>状态标记：</p>
                    <p>日志记录：</p>
                    <p>

                    </p>
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
                        <Tag color="red" onClick={this.handleTag}>寝室故障报修情况</Tag>
                    </Col>
                    <Col lg={{ span: 4 }}>
                        <Badge count="5" style={{ background: "#fb1b32" }} className="dorm-fix-btn">
                            <Button onClick={this.handleGetData}><Icon style={{ display: this.state.loadIcon }} type="loading" />获取</Button>

                        </Badge>
                        <br />
                        <Badge count="5" style={{ background: "#0892f8" }} color="processing" className="dorm-fix-btn">
                            <Button onClick={this.handleGetData}><Icon style={{ display: this.state.loadIcon }} type="loading" />获取</Button>
                        </Badge>
                        <br />
                        <Badge count="5" style={{ background: "#fdac3d" }} color="warning" className="dorm-fix-btn">
                            <Button onClick={this.handleGetData}><Icon style={{ display: this.state.loadIcon }} type="loading" />获取</Button>

                        </Badge>
                        <br />
                        <Badge count="5" style={{ background: "#52c41a" }} className="dorm-fix-btn">
                            <Button disabled={this.state.getDataBtnState} onClick={this.handleGetData}><Icon style={{ display: this.state.loadIcon }} type="loading" />获取</Button>
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