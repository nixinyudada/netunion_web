import React from "react"
import $ from 'jquery'
import { Button, Icon, Breadcrumb, Row, Col, DatePicker, Timeline, Input, Form,LocaleProvider,message, Modal } from "antd"
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
export default class DormFix extends React.Component {
    //16602803351
    state = {
        dormNumber:{
            dormNumberValue:'',
            dormNotice:'请输入正确的寝室号，以便工作人员查找',
            dormState:'',
            commitState:false
        },
        CallNumber:{
            CallNumberValue:'',
            CallNumberNotice:'请输入您的电话号码，以便工作人员联系您',
            CallNumberState:'',
            commitState:false
        },
        StateDescription:{
            StateDescriptionValue:'',
            StateDescriptionNotice:'如果您能提供准确的问题描述，这样会帮助我们更好的定位故障所在',
            StateDescriptionState:'',
            commitState:false
        },
        repairDate:{
            repairDateValue:'',
            repairDateNotice:'您发现这个故障的事件是？',
            repairDateState:'',
            commitState:false
        },
        captchaCode:false,
        captchaText:""
    }


    handleDormNumber = (event) => {
        let value = event.target.value;
        if (value.length < 3){
            this.setState({
                dormNumber:{
                    dormNumberValue:value,
                    dormNotice:'输入字符不能小于3位，谢谢！',
                    dormState:'error',
                }
            })
        }else if(value.length > 8){
            this.setState({
                dormNumber:{
                    dormNumberValue:value,
                    dormNotice:'输入字符不能大于8位，谢谢！',
                    dormState:'error',
                }
            })
        }else{
            this.setState({
                dormNumber:{
                    dormNumberValue:value,
                    dormState:'success',
                    commitState:true
                }
            })
        }
    }

    handleCallNumber = (event) => {
        let value = event.target.value;
        if (value.length < 11){
            this.setState({
                CallNumber:{
                    CallNumberValue:value,
                    CallNumberNotice:'请确保是正确的手机号，谢谢！',
                    CallNumberState:'warning',
                }
            })
        }else{
            if(!(/^1[3456789]\d{9}$/.test(value))){
                this.setState({
                    CallNumber:{
                        CallNumberValue:value,
                        CallNumberNotice:'请输入正确的手机号码，谢谢！',
                        CallNumberState:'error',
                    }
                })
            }else{
                this.setState({
                    CallNumber:{
                        CallNumberValue:value,
                        CallNumberState:'success',
                        commitState:true
                    }
                })
            }  
        }
        
        
    }

    handleStateDescription = (event) => {
        this.setState({
            StateDescription:{
                StateDescriptionValue:event.target.value,
                StateDescriptionNotice:'如果您能提供准确的问题描述，这样会帮助我们更好的定位故障所在',
                StateDescriptionState:'success',
                commitState:false
            }
        })
    }

    handleDate = (data,dateString) => {
        
        if (dateString){
            this.setState({
                repairDate:{
                    repairDateValue:dateString,
                    commitState:true
                }
            })
        }
        
    }

    handleGetCaptchaImg = () => {
        $.ajax({
            url:"http://localhost:3000/dormFixCaptchaImg",
            type:"get",
            success:function(ret){
                document.getElementById("captchaImg").innerHTML = ret.img
            },
            error:function(err){
                message.error("获取验证码失败！")
            }
        })
    }

    handleCaptchaInput = (event) => {
        var v = event.target.value
        this.setState({
            captchaText:v
        })
        // console.log(this.state.captchaText)
    }

    handleOnokModal = () => {
        
        var that = this
        $.ajax({
            url:"http://localhost:3000/dormFixCaptchaText",
            type:"post",
            data:{
                captchaText:this.state.captchaText,
                dormNum:this.state.dormNumber.dormNumberValue,
                callNum:this.state.CallNumber.CallNumberValue,
                userDescr:this.state.StateDescription.StateDescriptionValue,
                findDate:this.state.repairDate.repairDateValue,
                state:0,
                adminLog:"还未填写",
                admingUpdateTime:"无"
            },
            success:function (ret) {
                
                console.log(ret)

                if (!ret.codeify){
                    Modal.error({
                        title:"验证码错误！",
                    })
                    that.handleGetCaptchaImg()
                    that.setState({ captchaText:""})
                    return;
                }

                if (ret.msgBool){
                    that.setState({
                        captchaCode:false
                    })
                    Modal.success({
                        title:"提交成功！",
                        content:(
                            <p>你的故障申请已被提交，工作人员会很快响应 ^_^</p>
                        )
                    })

                    that.setState({
                        dormNumber:{
                            dormNumberValue:""
                        },
                        CallNumber:{
                            CallNumberValue:""
                        },
                        StateDescription:{
                            StateDescriptionValue:""
                        }
                    })
                }
            },
            error:function (err){
                Modal.error({
                    title:"出错了！",
                    content:(
                        <div>
                            <p>后台错了点错，请见谅...</p>
                            <b>您可以直接致电网管会：139****21332</b>
                        </div>
                    )
                })
            }
        })
    }

    handleCancelModal = () => {
        this.setState({
            captchaCode:false,
            captchaText:""
        })


    }

    handleCommit () {
        
        // console.log(this.state.dormNumber.commitState,this.state.CallNumber.commitState,this.state.repairDate.commitState)
        
        if (
            this.state.dormNumber.commitState&&
            this.state.CallNumber.commitState&&
            this.state.repairDate.commitState
            ){
            this.setState({ captchaCode:true })
            this.handleGetCaptchaImg()
        }else{
            message.error('请填写正确的表单数据！')
        }
       
    }
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
                <Modal
                    title="请输入一下验证码"
                    visible={this.state.captchaCode}
                    onCancel={this.handleCancelModal}
                    onOk={this.handleOnokModal}
                >
                    <div style={{width:"60%",margin:"0 auto"}}>
                        <div id="captchaImg" style={{float:"left"}}></div>
                        <Button onClick={this.handleGetCaptchaImg} id="ChangeChangeBtn" style={{float:"right"}}>换一张</Button>
                    </div>   

                    <p>
                        &nbsp;
                    </p>
                    <p>
                        <Input value={this.state.captchaText} onChange={this.handleCaptchaInput} style={{width:"60%"}} type="text" />
                    </p>
                </Modal>
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
                                hasFeedback
                                validateStatus={this.state.dormNumber.dormState}
                                help={this.state.dormNumber.dormNotice}
                            >
                                <Input value={this.state.dormNumber.dormNumberValue} placeholder="寝室号" onChange={this.handleDormNumber} />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="联系电话"
                                hasFeedback
                                validateStatus={this.state.CallNumber.CallNumberState}
                                help={this.state.CallNumber.CallNumberNotice}
                            >
                                <Input value={this.state.CallNumber.CallNumberValue} placeholder="联系电话" onChange={this.handleCallNumber}  />
                            </FormItem>

                            <FormItem
                                {...formItemLayout}
                                label="状态描述"
                                hasFeedback
                                validateStatus={this.state.StateDescription.StateDescriptionState} 
                                help={this.state.StateDescription.StateDescriptionNotice} 
                            >
                                <TextArea value={this.state.StateDescription.StateDescriptionValue} rows="4" onChange={this.handleStateDescription} placeholder='故障描述' />
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
                                    onChange = {this.handleDate}
                                    /></LocaleProvider>
                            </FormItem>
                           

                            <FormItem style={{textAlign:"center"}}>
                               
                                <Button type="primary" onClick={this.handleCommit.bind(this)}>
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