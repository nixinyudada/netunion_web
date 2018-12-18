import React from 'react';
import "./index.css";

import HeaderNav from "./../HeaderNav"
import AdminLeftNav from "./../AdminComponents/AdminLeftNav"
import { Col,Row } from 'antd';


class Admin extends React.Component {
  render() {
    return (
      <div style={{maxWidth:1400}}>
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
