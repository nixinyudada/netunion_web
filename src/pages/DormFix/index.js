import React from "react"
import { Icon, Breadcrumb, Row, Col, Steps,Timeline } from "antd"

export default class DormFix extends React.Component {

    render() {
        const Step = Steps.Step;
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
                    <Col lg={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                        <Steps size="small">
                            <Step status="finish" title="Login" icon={<Icon type="user" />} />
                            <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
                            <Step status="process" title="Pay" icon={<Icon type="loading" />} />
                            <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                        </Steps>
                    </Col>
                    <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 3 }} style={{opacity:0.3}}>
                        <Timeline>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item color="red">
                                <p>Solve initial network problems 1</p>
                                <p>Solve initial network problems 2</p>
                                <p>Solve initial network problems 3 2015-09-01</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <p>Technical testing 1</p>
                                <p>Technical testing 2</p>
                                <p>Technical testing 3 2015-09-01</p>
                            </Timeline.Item>
                        </Timeline>
                    </Col>
                </Row>
                <Row>

                </Row>
            </div >
        );
    }
}