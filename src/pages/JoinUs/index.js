import React from "react"
import { Icon, Breadcrumb, Row, Col, Form, Input, Button, AutoComplete, Select,Modal } from "antd"
import OrganizationMenu from "../organizationMenu";

const Option = AutoComplete.Option;
const { TextArea } = Input;
export default class JoinUs extends React.Component {
    state = {
        result: [],
        job:[],
        name:"",
        college:"",
        specialty:"",
        email:"",
        selfInfo:""
    }

    handleSearch = (value) => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = ['qq.com', '163.com', 'gmail.com'].map(domain => `${value}@${domain}`);
        }
        this.setState({ result });
    }



    


    handleNameInput = (event) => {
        console.log(event.target.value)
        this.setState({
            name:event.target.value
        })
    }

    handleCollegeInput = (event) => {
        console.log(event.target.value)
        this.setState({
            college:event.target.value
        })
    }

    handleSpecialtyInput = (event) => {
        console.log(event.target.value)
        this.setState({
            specialty:event.target.value
        })
    }

    handleEmailInput = (value) => {
        this.setState({
            email:value
        })
    }

    handleJobInput = (value,option) => {
        let job = []
        option.map((value)=>{
            let {props} = value;
            job.push(props.value)
        })

        this.setState({
            job
        })
    }

    handleSelfInfoInput = (event) => {
        console.log(event.target.value)
        this.setState({
            selfInfo:event.target.value
        })
    }

    handleCommit = () => {
        Modal.info({
            title: '表单提交信息',
            content: (
              <div>
                <p>姓名：{this.state.name}</p>
                <p>学院：{this.state.college}</p>
                <p>专业：{this.state.specialty}</p>
                <p>邮箱：{this.state.email}</p>
                <p>应聘职位：{this.state.job}</p>
                <p>自我介绍：{this.state.selfInfo}</p>
              </div>
            ),
            onOk() {},
          });

    }
    render() {

        const { result } = this.state;
        const children = result.map(email => <Option key={email}>{email}</Option>);

        const FormItem = Form.Item;
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
                        <Icon type="usergroup-add" />
                        <span>加入我们</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                <h4 style={{ marginBottom: "10px" }}>欢迎加入电子科技大学
                沙河网络管理委员会</h4>
                <Row>
                    <Col lg={{ span: 10, offset: 1 }} xs={{ span: 10, offset: 1 }}>
                        <Form>
                            <FormItem
                                {...formItemLayout}
                                label="姓名"
                                validateStatus="error"
                                hasFeedback
                                help="该项不能为空！"
                                
                            >
                                <Input id="error" onChange={this.handleNameInput} placeholder="姓名" id="error" />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="学院"
                                hasFeedback
                                validateStatus="warning"
                                help="请勿输入非法字符！"
                            >
                                <Input onChange={this.handleCollegeInput} placeholder="学院" id="warning" />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="专业"
                                hasFeedback
                                validateStatus="success"

                            >
                                <Input onChange={this.handleSpecialtyInput} placeholder="专业" id="success" />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="邮箱"
                                hasFeedback
                                validateStatus="success"
                            >
                                <AutoComplete
                                    onSearch={this.handleSearch}
                                    placeholder="请输入你的邮箱"
                                    onChange={this.handleEmailInput}
                                >
                                    {children}
                                </AutoComplete>
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="应聘职位"
                                hasFeedback
                                validateStatus="success"

                            >
                                <Select 
                                    mode="multiple"
                                    showArrow={true}
                                    allowClear
                                    onChange={this.handleJobInput} 
                                    placeholder="请选择你要的职位">
                                    <Option value="系统管理员">系统管理员</Option>
                                    <Option value="网络管理员">网络管理员</Option>
                                    <Option value="UI/视觉设计">UI/视觉设计</Option>
                                    <Option value="WEB前端">WEB前端</Option>
                                    <Option value="JAVA">JAVA</Option>
                                    <Option value="PHP">PHP</Option>
                                    
                                </Select>
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="自我介绍"
                                hasFeedback
                                validateStatus="success"
                                
                            >
                                <TextArea rows="4" onChange={this.handleSelfInfoInput} placeholder="自我介绍" />
                            </FormItem>




                            <FormItem style={{ textAlign: "center" }}>

                                <Button type="primary" onClick={this.handleCommit}>
                                    提交
                                </Button>

                            </FormItem>
                        </Form>
                    </Col>

                    <Col lg={{ span: 7, offset: 4 }} xs={{ span: 0 }} style={{ opacity: 0.8 }}>
                        <OrganizationMenu speed="2000"></OrganizationMenu>
                    </Col>
                </Row>
            </div>
        );
    }
}