import React, { Fragment } from 'react'
import { _logo } from '../../../utils/Utils/ImgPath'
import { BsBasket, BsPersonCircle, BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import NavHeader from './NavHeader';
import { _account, _cart, _edit, _home, _login, _order, _register } from '../../../utils/Utils/ConfigPath';
import { useSelector } from 'react-redux';
import { Dropdown, Menu, Space } from 'antd';
import { history } from '../../../App';
import { USER_LOGIN } from '../../../redux/Types/QuanLyAccountType';
import _ from 'lodash'


export default function Header() {
    const { userLogin } = useSelector(state => state.QuanLyAccountReducer);

    const { cart } = useSelector(state => state.QuanLyCartReducer);

    let number = 0;
    cart?.forEach(element => {
        number += element.Quantity
    })

    const menu = (
        <Menu
            items={[
                {
                    label: <button onClick={() => {
                        history.push(`${_account}${_edit}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:font-bold hover:text-yellow-500">Thông tin tài khoản</button>,
                    key: '0',
                },
                {
                    label: <Fragment>
                        <button onClick={() => {
                            history.push(`${_order}/${userLogin.account.id}`);
                            window.location.reload();
                        }} className="self-center px-4 py-2 hover:font-bold hover:text-yellow-500">Lịch sử đặt hàng</button>
                    </Fragment>,
                    key: '1',
                },
                {
                    label: <button onClick={() => {
                        sessionStorage.removeItem(USER_LOGIN);
                        history.push(`${_home}`);
                        window.location.reload();
                    }} className="self-center px-4 py-2 hover:font-bold hover:text-yellow-500">Đăng xuất</button>,
                    key: '2',
                },
            ]}
        />
    )


    const operations = <Fragment>
        {!_.isEmpty(userLogin) ?
            <Dropdown
                overlay={menu}
                trigger={['click']}
            >
                <span onClick={(e) => e.preventDefault()}>
                    <Space>
                        <div className='flex items-center text-black mt-2 cursor-pointer hover:text-yellow-400'>
                            <BsPersonCircle className='text-2xl mr-1' />
                            <span className='flex items-center text-base font-bold '>{userLogin.account.Username}</span>
                        </div>
                    </Space>
                </span>
            </Dropdown>
            : <Fragment>
                <NavLink to={_login} className='border text-black py-2 px-4 mx-2 rounded-lg hover:text-yellow-500 hover:border-yellow-500 '>Đăng nhập</NavLink>
                <NavLink to={_register} className='border text-black py-2 px-4 mx-2 rounded-lg hover:text-yellow-500  hover:border-yellow-500 '>Đăng ký</NavLink>
            </Fragment>}
    </Fragment>
    return (
        <div className='fixed top-0 w-full z-50 bg-white'>
            <div className='grid grid-cols-12'>
                <div className='col-start-3 col-span-8'>
                    <div className='grid grid-cols-8 my-4'>
                        <div className='col-span-2'>
                            <img className='h-20' src={_logo} alt='Phượt bụi Store' />
                        </div>
                        <div className='col-span-3'>
                            <div className='relative mb-6 w-full my-6'>
                                <input type="text" className="border text-gray-900 text-sm rounded-lg focus:outline-none focus:ring focus:ring-yellow-300 focus:shadow-lg block w-full pl-4 p-2.5 " placeholder="Tìm kiếm danh mục, thương hiệu hoặc các sản phẩm..." />
                                <NavLink to='' className="absolute inset-y-0 right-4 flex items-center pl-3">
                                    <BsSearch className='text-yellow-500 text-lg' />
                                </NavLink>
                            </div>
                        </div>
                        <div className='col-span-3 flex justify-end items-center'>
                            <div className='flex items-center uppercase'>
                                {operations}
                                <NavLink to={`${_cart}`} className='ml-4 flex text-black text-2xl hover:text-yellow-500'>
                                    <BsBasket />
                                    <span className='text-base text-red-500 -mt-1'>({number})</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavHeader />
        </div>
    )
}
