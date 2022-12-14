import React from 'react'
import { _logo } from '../../../utils/Utils/ImgPath'
import { BsBasket, BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import NavHeader from './NavHeader';

export default function Header() {
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
                                <NavLink to='' className='border text-black py-2 px-4 mx-2 rounded-lg hover:text-yellow-500 hover:border-yellow-500 '>Đăng nhập</NavLink>
                                <NavLink to='' className='border text-black py-2 px-4 mx-2 rounded-lg hover:text-yellow-500  hover:border-yellow-500 '>Đăng ký</NavLink>
                                <NavLink to='' className='ml-4 text-black text-2xl hover:text-yellow-500'><BsBasket /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavHeader />
        </div>
    )
}
