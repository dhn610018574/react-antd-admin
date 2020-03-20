/**
 * 全局布局，局部content部分刷新
 */
import React, { useState } from 'react';
import { Layout, Menu, } from 'antd';
import { Link } from 'react-router-dom'

import menus from '../utils/menu.js'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export default (props) => {
  // 控制折叠slider
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }
  // 菜单渲染函数
  const renderMenu = (data) => {
    return data.map((item) => {
      if (item.subMenu) {
        return <SubMenu key={item.key} title={
          <span>
            {item.icon}
            <span>{item.label}</span>
          </span>
        }>
          {renderMenu(item.subMenu)}
        </SubMenu>
      }
      return <Menu.Item key={item.key} title={item.label}>
        <span style={{ height: '100%', width: '100%', display: 'block' }}>
          {
            item.path ?
              <Link to={item.path} style={{ height: '100%', width: '100%', display: 'block' }}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
              :
              <>
                {item.icon}
                <span>{item.label}</span>
              </>
          }

        </span>
      </Menu.Item>
    })
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
            renderMenu(menus)
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          Talk is cheap. Show me the code !
        </Header>
        <Content style={{ margin: '16px 16px' }}>
          <div style={{ padding: 20, minHeight: 400, backgroundColor: '#fff' }}>
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}