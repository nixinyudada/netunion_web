import React from 'react';
import './App.css';
import "./style/common.css"
import HeaderNav from "./components/HeaderNav"
import LeftNav from "./components/LeftNav"
import Content from './components/Content';
import { Row, Col } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div className="index">
        <HeaderNav></HeaderNav>
        <Row>
          <Col span={4}>
            <LeftNav></LeftNav>
          </Col>
          <Col span={20}>
          <Content>
              {this.props.children}
        </Content>
          </Col>
        </Row>
        <Row>
          <Col>
          
          </Col>
        </Row>
        
      </div>
    );
  }
}

export default App;
