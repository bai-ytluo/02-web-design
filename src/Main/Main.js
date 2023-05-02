import React, { useState, useEffect } from 'react'; 
import { Button, Layout, Menu, theme } from 'antd'; 
import {
    MenuUnfoldOutlined, 
    MenuFoldOutlined, 
} from '@ant-design/icons'; 
import 'antd/dist/reset.css';
import './Main.css'; 
import { useNavigate, Outlet } from 'react-router-dom'; 
import items from './Items.js';

const { Header, Sider, Content } = Layout; 
const defaultTheme = {
  token: {
    colorBgContainer: '#FFFFFF',
  },
}; 

const Main = ({ theme }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const colorBgContainer = (theme && theme.token && theme.token.colorBgContainer)
                                  || defaultTheme.token.colorBgContainer; 
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    const toLogin = () => {
        sessionStorage.removeItem('username'); 
        navigate('/login'); 
    }
    useEffect(() => {
        if(sessionStorage.username){
            navigate('/main'); 
        }
        else{
            navigate('/login'); 
        }
    }, [] ); 
    return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className="mainLogo" />
                    <Menu
                        defaultSelectedKeys={['1']}
                        /* defaultOpenKeys={[]} */
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                </Sider>
                <Layout className='site-layout'>
                    <Header style={{ padding:0 , background:colorBgContainer }}>
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, 
                            { className:"mainTrigger", onClick: toggle }
                        )}
                        <Button type="primary" onClick={toLogin}> Logout </Button>
                    </Header>
                    <Content style={{
                        margin:'24px, 16px', 
                        padding: 24, 
                        minHeight: 280, 
                        background: colorBgContainer, 
                    }}>
                        <div className="mainContent">
                            <Outlet />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
}; 

export default Main; 

