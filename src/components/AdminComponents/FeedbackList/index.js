import React from "react";
import {Breadcrumb,Icon} from "antd"

export default class FeedbackList extends React.Component{

    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="tool" />
                        <span>意见反馈信息</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                <h4 style={{ marginBottom: "10px" }}>意见反馈情况</h4>
            </div>
        )
    }
}