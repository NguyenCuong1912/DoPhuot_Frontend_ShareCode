import { Layout, Menu, message } from 'antd';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { USER_LOGIN } from '../../redux/Types/QuanLyAccountType';
import { _account, _admin, _bill, _cate, _home, _login, _product } from '../../utils/Utils/ConfigPath';
import { Redirect, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { history } from '../../App';
import _ from 'lodash'
import { _logo } from '../../utils/Utils/ImgPath';
import { UserOutlined } from '@ant-design/icons';
import { BiGlassesAlt } from 'react-icons/bi';
import { BsCardText, BsSunglasses } from 'react-icons/bs';


const { Header, Content, Footer, Sider } = Layout;


export default function AdminTemplate(props) {
    const { Component, ...restRoute } = props;
    const [collapsed, setCollapsed] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const { userLogin } = useSelector(state => state.QuanLyAccountReducer);
    if (!sessionStorage.getItem(USER_LOGIN)) {
        message.error('Bạn chưa đăng nhập!')
        return <Redirect to={_login} />
    }
    if (userLogin.account.Role !== 'ADMIN') {
        message.error('Bạn không có quyền truy cập vào trang này!')
        return <Redirect to={_home} />
    }


    const operations = <Fragment>
        {!_.isEmpty(userLogin) ? <div className='flex'>
            <NavLink to='/profile' className='flex'>
                <img className='w-14 h-14 rounded-full' src='https://haycafe.vn/wp-content/uploads/2022/03/anh-Zoro-chibi-va-Luffy.jpg' alt={userLogin.username} />
                <span className='flex items-center border-r-2 border-green-900 text-lg font-bold mx-4 pr-4 cursor-pointer text-black'>Xin chào!, {userLogin.account.Username}</span>
            </NavLink>
            <button onClick={() => {
                sessionStorage.removeItem(USER_LOGIN);
                history.push(`${_home}`);
                window.location.reload();
            }} className="self-center mr-8 px-4 py-3 border border-yellow-500 rounded-lg text-yellow-500 text-lg font-bold hover:text-white hover:bg-yellow-500">Đăng xuất</button>
        </div> : ''}
    </Fragment>
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider className='border-r' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: '#000' }}>
                    <div onClick={() => {
                        history.push(`${_home}`)
                    }} className="w-full flex justify-center my-4 cursor-pointer" title='Trang chủ'>
                        <img className='h-20' src={_logo} alt='Phượt bụi Store' />
                    </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ backgroundColor: 'transparent' }}>
                        <Menu.Item key='1' icon={<UserOutlined style={{ fontSize: 20 }} />}>
                            <NavLink className='text-black' to={`${_admin}${_account}`} >Accounts</NavLink>
                        </Menu.Item>
                        <Menu.Item key='2' icon={<BiGlassesAlt style={{ fontSize: 25 }} />}>
                            <NavLink className='text-black' to={`${_admin}${_cate}`} >Category</NavLink>
                        </Menu.Item>
                        <Menu.Item key='3' icon={<BsSunglasses style={{ fontSize: 25 }} />}>
                            <NavLink className='text-black' to={`${_admin}${_product}`}>Glasses</NavLink>
                        </Menu.Item>
                        <Menu.Item key='4' icon={<BsCardText style={{ fontSize: 20 }} />} >
                            <NavLink className='text-black' to={`${_admin}${_bill}`}>Bill</NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <div className='bg-white border-b shadow-lg'>
                        <div className='flex justify-end mt-1'>{operations}</div>
                    </div>
                    <Content style={{ margin: '0 16px', }}>
                        <div style={{ padding: 24, minHeight: 360, }}>

                            <Component {...propsRoute} />

                        </div>
                    </Content>
                    <div className='py-4 text-center border-t-2'>
                        Created by Hieu
                    </div>
                </Layout>
            </Layout>
        </Fragment>
    }} />
}
