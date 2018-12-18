import React from "react";
import {Breadcrumb,Icon} from "antd"


export default class JoinUsList extends React.Component{
    state = { checked: true }

    handleChangeTag = (checked) => {
        this.setState({ checked })
    }

    render(){
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Icon type="tool" />
                        <span>报名信息</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <hr style={{ borderColor: "#00a4dd", margin: "10px 0px" }} />
                <h4 style={{ marginBottom: "10px" }}>报名信息</h4>

            </div>
        )
    }
}