import React, { Fragment, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { QuanLyCategoryReducer } from './../../../redux/Reducers/QuanLyCategoryReducer';
import { history } from '../../../App';
import { _product } from '../../../utils/Utils/ConfigPath';

export default function NavHeader() {

    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCateAction())
    }, [])

    const menu = (
        <Menu>
            {lstCate?.map((cate, index) => {
                return <Fragment key={index}>
                    <Menu.Item key={cate.id}>
                        <div onClick={() => {
                            history.push(`${_product}/${cate.id}`)
                        }} className='pr-20 text-base'>{cate.CategoryName}</div>
                    </Menu.Item>
                </Fragment>
            })}
        </Menu>
    );
    return (
        <div className='grid grid-cols-12 bg-yellow-400 shadow-lg'>
            <div className='col-start-3 col-span-8'>
                <div className='h-16 uppercase font-medium flex items-center'>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-l border-white flex items-center hover:text-yellow-500 hover:bg-white'>
                        Trang chủ
                    </NavLink>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white '>
                        Giới thiệu
                    </NavLink>
                    <Dropdown overlay={menu}>
                        <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white ' onClick={(e) => e.preventDefault()}>
                            <Space>
                                Danh mục sản phẩm

                                {/* <AiOutlineCaretDown /> */}
                            </Space>
                        </NavLink>
                    </Dropdown>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white '>
                        Tích điểm
                    </NavLink>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white '>
                        Blog
                    </NavLink>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white '>
                        Đổi trả hàng
                    </NavLink>
                    <NavLink to='' className='h-16 px-4 text-black border-r border-white flex items-center hover:text-yellow-500 hover:bg-white '>
                        Facebook
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
