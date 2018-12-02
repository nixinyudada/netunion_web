import React from "react"
import {Icon,Breadcrumb} from "antd"



export default class Feedback extends React.Component{

    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="solution" />
                        <span>意见反馈</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}