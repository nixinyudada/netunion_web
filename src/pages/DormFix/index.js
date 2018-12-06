import React from "react"
import { Button, Icon, Breadcrumb, Row, Col, DatePicker, Timeline, Input, Form,LocaleProvider } from "antd"
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
export default class DormFix extends React.Component {
    render() {
        const FormItem = Form.Item;
        const { TextArea } = Input;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 15 },
            },
        };
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="tool" />
                        <span>寝室报修</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                <h4 style={{ marginBottom: "10px" }}>欢迎使用线上寝室报修系统</h4>

                <Row>
                    <Col lg={{ span: 10, offset: 1 }} xs={{span:22}}>
                        <Form>
                            <FormItem
                                {...formItemLayout}
                                label="寝室号"
                                validateStatus="error"
                                help="请输入正确的寝室号，以便工作人员查找"
                            >
                                <Input placeholder="寝室号" id="error" />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="联系电话"
                                hasFeedback
                                validateStatus="warning"

                            >
                                <Input placeholder="联系电话" id="warning" />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="状态描述"
                                hasFeedback
                                validateStatus="validating"
                                help="请稍等，正在检索这个问题的普遍发生原因..."
                            >
                                <TextArea rows="4" placeholder="如果你能描述故障，将对我们有很大的帮助" id="validating" />
                            </FormItem>


                           <FormItem
                                {...formItemLayout}
                                label="故障发现时间"
                                hasFeedback
                            >
                            <LocaleProvider locale={zh_CN}>
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="你是多久发现这个故障的？"
                                    style={{width:"100%"}}
                                    /></LocaleProvider>
                            </FormItem>
                           

                            <FormItem style={{textAlign:"center"}}>
                               
                                <Button type="primary">
                                    提交
                                </Button>
                                
                            </FormItem>
                        </Form>
                    </Col>
                    
                    <Col lg={{ span: 7, offset: 4 }} xs={{ span: 0}} style={{opacity:0.8}}>
                        <Timeline>
                            <Timeline.Item color="green">提交表单，描述问题 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">事件开始受理 2015-09-01</Timeline.Item>
                            <Timeline.Item color="red">
                                <p>运维人员分析问题 1 2015-09-01</p>
                                <p>排除问题 2 2015-09-01</p>
                                <p>指制定解决方案 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>电话联系故障所在的用户 1 2015-09-01</p>
                                <p>沟通/协商解决方案 2 2015-09-01</p>
                                <p>上门排除故障 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item color="green">记录日志 2015-09-01</Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
            </div >
        );
    }
}