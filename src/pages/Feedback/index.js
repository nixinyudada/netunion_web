import React from "react"
import { Icon, Breadcrumb, Form, Button, Input, Col, Row } from "antd"
const { TextArea } = Input;


export default class Feedback extends React.Component {

    state = {
        TextLength:0,
        TextState:true,
        TextStateStr:""
    }
    handleFeedbackInput = (event) => {
        let txtLength = event.target.value.length
        this.setState({
            TextLength:txtLength
        })
        if (txtLength > 2){
            this.setState({
                TextStateStr:"success"
            })
        }else{
            this.setState({
                TextStateStr:""
            })
        }
    }
    handleCommit = () => {
        if (this.state.TextLength < 3){
            this.setState({
                TextStateStr:"error"
            })
        }else{

        }
    }
    render() {

        const FormItem = Form.Item;
        
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="solution" />
                        <span>意见反馈</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
<hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
<h4 style={{ marginBottom: "10px" }}>电子科技大学
                沙河网络管理委员会</h4>
                    <br/>
                    <Row>
                    <Col lg={{span:12,offset:6}}>
                        <Form >
                        <FormItem
                            label="意见反馈"
                            hasFeedback={this.state.TextState}
                            validateStatus={this.state.TextStateStr}
                            help="至少输入多于50个字符的内容来反映您的意见及问题"
                        >
                            <TextArea rows="10" onChange={this.handleFeedbackInput} placeholder="请写下您宝贵的意见..." />
                        </FormItem>
                        <FormItem style={{ textAlign: "center" }}>
                            <Button type="primary" onClick={this.handleCommit}>
                                提交
                            </Button>
                        </FormItem>
                    </Form>
                        
                    </Col>
                    </Row>
            </div>
        );
    }
}