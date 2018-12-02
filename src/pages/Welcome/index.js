import React from "react"
import { Breadcrumb, Icon } from "antd"

export default class Welcome extends React.Component{
    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="user" />
                        <span>主页</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}