import React from "react"
import $ from "jquery"
import PropTypes from 'prop-types';
import {
    Form, Icon, Input, Button, Checkbox, Row, Col,message
} from 'antd';
import "./index.css"
const FormItem = Form.Item;
class Login extends React.Component {
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    state = {
        captchaCode: "",
    }

    // 初始化验证码
    componentDidMount() {
        $.ajax({
            url: "http://localhost:3000/changeCaptcha",
            type: "get",
            dataType: "jsonp",
            success: function (ret) {
                document.getElementById("captcha").innerHTML = ret.img
            },
            error: function (err) {
                message.error("验证码获取失败！")
            }
        })

    }

    // 验证码 换一张操作
    handleChangeCaptcha = () => {
        $.ajax({
            url: "http://localhost:3000/changeCaptcha",
            type: "get",
            dataType: "jsonp",
            success: function (ret) {
                document.getElementById("captcha").innerHTML = ret.img
            },
            error: function (err) {
                message.error("验证码获取失败！")
            }
        })
    }

    // 验证码后台验证
    handleCaptcha = (event) => {
        let that = this
        $.ajax({
            url: "http://localhost:3000/captcha",
            type: "post",
            dataType: "json",
            data: {
                captcha: event.target.value
            },
            success: function (ret) {
                that.setState({
                    captchaCode: ret.captcha
                })
            },
            error: function (err) {
                message.error("验证码获取失败！")
            }
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.handleCaptcha(e)
        let that = this
        this.props.form.validateFields((formErr, values) => {
            if (!formErr) {
                if(that.state.captchaCode){
                    $.ajax({
                        url: "http://localhost:3000/loginify",
                        type: "post",
                        data: values,
                        success: function (ret) {
                            if(ret.bool){
                                message.success(ret.msg)
                                that.context.router.history.push('/admin/welcome')
                            }else{
                                message.error(ret.msg)
                                that.handleChangeCaptcha()
                            }
                        },
                        error: function (err) {
                            message.error("错误！",err)
                        }
                    })
                }else{
                    message.error("验证码输入错误！")
                    that.handleChangeCaptcha()
                }
            }
        })
    
    }



    render() { 
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <br /><br /><br />
                <h1 style={{ textAlign: "center" }}>欢迎登陆网管会后台管理系统</h1>
                <br />
                <Row>
                    <Col lg={{ span: 4, offset: 10 }}>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入你的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入你的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                <div id="captcha" style={{ float: "left", width: "40%", marginRight: "10px" }}>

                                </div>
                                <Button style={{ float: "right", marginTop: "10px" }} onClick={this.handleChangeCaptcha}>换一张</Button>
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('check', {
                                    rules: [{ required: true, message: '请输入本次验证码!' }],
                                })(
                                    <Input onChange={this.handleCaptcha} style={{ width: "60%" }} prefix={<Icon type="schedule" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="验证码" />
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
