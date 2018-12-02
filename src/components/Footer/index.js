import React from "react"
import {Skeleton, Button} from "antd"
export default class Footer extends React.Component{
    state = {
     loading:true
    }

    handleChangeSkeleton = () => {
        this.state.loading?this.setState({
            loading:false
        }):this.setState({
            loading:true
        })
    }
    render(){
        return (
            <div>
                <Button onClick={this.handleChangeSkeleton}>ok</Button>
                <Skeleton loading={this.state.loading}>
                    footer...
                </Skeleton>
            </div>
        );
    }
}