import React from 'react';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class MyMenu extends React.Component{
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render(){
          return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
            <Menu.Item key="mail">
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              Navigation Two
            </Menu.Item>
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
                  Navigation Three - Submenu
                </span>
              }
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu>
          )
      }
}
export default MyMenu