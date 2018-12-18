import React from "react"
import {
    Form, Icon, Input, Button, Checkbox, Row, Col,
} from 'antd';
import "./index.css"
const FormItem = Form.Item;
class Login extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('接受的值: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <br/><br/><br/>
                <h1 style={{textAlign:"center"}}>欢迎登陆网管会后台管理系统</h1>
                <br/>
                <Row>

                    <Col lg={{span:6,offset:9}}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: '请输入你的用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入你的密码!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                <img style={{width:"40%",marginRight:"10px"}} src="http://img4.imgtn.bdimg.com/it/u=2476609755,3832854071&fm=26&gp=0.jpg" alt="验证码"/>
                <a href="http://www.baidu.com">换一张</a>
                </FormItem>
                <FormItem>
                    {getFieldDecorator('check', {
                        rules: [{ required: true, message: '请输入本次验证码!' }],
                    })(
                        <Input prefix={<Icon type="schedule" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="check" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住密码</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
          </Button>
                </FormItem>
            </Form>
                    </Col>
                </Row>
            

            </div>
        )
    }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;
