import React from 'react';
import "./index.css";
import { Layout, Menu, Icon} from 'antd';
import { NavLink } from "react-router-dom"

const { Sider } = Layout;


class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Layout className="leftNav">
          <Sider theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            defaultCollapsed
            width="150"
            onBreakpoint={(broken) => { /*console.log(broken); */ }}
            onCollapse={(collapsed, type) => {
              /**console.log(collapsed, type ); */
            }}
          >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"
              >
                <NavLink to="/index/welcome">
                  <Icon type="user" />
                  <span>
                    欢迎！
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/index/dormFix">
                  <Icon type="tool" />
                  <span>
                      寝室报修
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/index/joinUs">
                <Icon type="usergroup-add" />
                  <span>
                      加入我们
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/index/feedback">
                <Icon type="solution" />
                  <span>
                    意见反馈
                    </span>
                </NavLink>
               </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default LeftNav;
