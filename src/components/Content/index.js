import React from "react"


export default class Content extends React.Component{
    render(){
        return (
            <div style={{color:"#000"}}>
                {this.props.children}
            </div>
        );
    }
}