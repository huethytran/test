import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import MyMenu from './HeaderFooter/MyMenu';
const { Header, Content, Footer } = Layout;
class Home extends React.Component {
    
    render(){
        return(
            <Layout className="layout">
    <Header>
      <div className="logo" />
            <MyMenu/>
            </Header>
            <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
            <div>
                <h1>Trang chủ</h1>
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default Home