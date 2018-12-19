import React from 'react';
import "./index.css";
import $ from "jquery"
import PropTypes from 'prop-types';

import HeaderNav from "./../HeaderNav"
import AdminLeftNav from "./../AdminComponents/AdminLeftNav"
import { Col,Row } from 'antd';


class Admin extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
}
  componentWillMount(){
    let that = this
      $.ajax({
        url: "http://localhost:3000/loginSession",
        type: "get",
        success: function (ret) {
          if(!ret.loginSession){
            that.context.router.history.push('/login')
          }
        }
    })
  }

  render() {
    return (
      <div style={{maxWidth:1400,margin:"0 auto"}}>
        <HeaderNav></HeaderNav>
        <Row>
          <Col lg={{span:4}}>
              <AdminLeftNav></AdminLeftNav>
          </Col>
          <Col lg={{span:18,offset:0}}>
              {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
