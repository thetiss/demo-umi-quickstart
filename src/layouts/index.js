/*
 * @Author: hiyan 
 * @Date: 2020-11-04 10:08:33 
 * @Last Modified by: hiyan
 * @Last Modified time: 2020-11-19 15:28:01
 */
import DocumentTitle from 'react-document-title'
import { Link } from 'umi'
import { Layout, Menu, } from 'antd'
import {
    PlusSquareOutlined,
    CalculatorOutlined ,
    FileDoneOutlined,
    ZhihuOutlined
    } from '@ant-design/icons';
import { PageHeaderWrapper } from '@ant-design/pro-layout'
import Header from './Header'
import './index.css'

// 用于PageHeaderWrapper的面包屑
const breadRoutes = {
    routes: [
      { path: '/', breadcrumbName: '首页' },
      { path: '/counter', breadcrumbName: '计算器' },
      { path: '/todolist', breadcrumbName: '备忘录' }
    ],
    itemRender: (route, params, routes, paths) => {
      const secondRoute = routes.indexOf(route) === 1
      return secondRoute ? (
        <Link to={route.path} style={{color: 'rgba(0,0,0,0.65)'}}>{route.breadcrumbName}</Link>
      ) : (
          <span>{route.breadcrumbName}</span>
        )
    }
  }
  

const BasicLayout = (props) => {
    const { children } = props;
    const { Header, Sider, Content, Footer } = Layout;
    const { SubMenu } = Menu;
    const setPageTitle = () => {
        return 'Hiyan umi';
    }
    return(
        <DocumentTitle title={setPageTitle()}>
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}>Hiyan Master</div>
                    <Menu theme="dark" mode="inline">
                        <SubMenu title="基础入门" icon={<PlusSquareOutlined />}>
                            <Menu.Item key="counter">
                                <CalculatorOutlined />
                                <span>计算器</span>
                                <Link to="/users"></Link>
                            </Menu.Item>
                            <Menu.Item key="todolist">
                                <FileDoneOutlined />
                                <span>备忘录</span>
                                <Link to="/todolist"></Link>
                            </Menu.Item>                        
                            <Menu.Item key="basic">
                                <ZhihuOutlined />
                                <span>查漏补缺</span>
                                <Link to="/basic"></Link>
                            </Menu.Item>    
                        </SubMenu>
                        <SubMenu title="Dva Usage" icon={<PlusSquareOutlined />}>
                            <Menu.Item key="card">
                                <CalculatorOutlined />
                                <span>卡片</span>
                                <Link to="/card"></Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu title="练手demo" icon={<PlusSquareOutlined />}>
                            <Menu.Item key="employee">
                                <CalculatorOutlined />
                                <span>用户管理</span>
                                <Link to="/employee"></Link>
                            </Menu.Item>
                       </SubMenu>                    
                       <SubMenu title="BizCharts熟悉" icon={<PlusSquareOutlined />}>
                            <Menu.Item key="overall">
                                <CalculatorOutlined />
                                <span>Overview</span>
                                <Link to="/bizcharts/overall"></Link>
                            </Menu.Item>
                            <Menu.Item key="LineAdvance">
                                <CalculatorOutlined />
                                <span>LineAdvance</span>
                                <Link to="/bizcharts/lineAdvance"></Link>
                            </Menu.Item>
                            <Menu.Item key="Interval">
                                <CalculatorOutlined />
                                <span>Interval(e.g. Bar)</span>
                                <Link to="/bizcharts/bar"></Link>
                            </Menu.Item>
                       </SubMenu>
                       <SubMenu title="应急大屏" icon={<PlusSquareOutlined />}>
                            <Menu.Item key="datav">
                                <CalculatorOutlined />
                                <span>大屏服务</span>
                                <Link to="/datav"></Link>
                            </Menu.Item>
                       </SubMenu> 
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: 'rgba(255,255,255,.2)', textAlign: 'center', padding: 0 }}>Header</Header>
                    <PageHeaderWrapper title="基础练习" subTitle="2个demo" breadcrumb={breadRoutes}>
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {children}
                        </div>
                    </Content></PageHeaderWrapper>
                    <Footer style={{ textAlign: 'center' }}>hiyan Ant Design ©2020 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </DocumentTitle>
        // {/* </PageHeaderWrapper> */}

    )
 }
 export default BasicLayout;