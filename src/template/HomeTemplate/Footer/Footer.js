import React from 'react'
import {
    AiFillFacebook,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { NavLink } from 'react-router-dom';




export default function Footer() {
    return (
        <div className='bg-yellow-400'>
            <div className='grid grid-cols-7 pt-4'>
                <div className='col-start-2 col-span-5'>
                    <div className='grid grid-cols-4 border-b-2 py-4'>
                        <div className='text-xl'>
                            <h2 className='uppercase font-bold'>Liên hệ</h2>
                            <div className='font-medium'>
                                Cửa hàng tại Hà Nội:
                            </div>
                            <div className='text-base'>
                                235 Hoàng Quốc Việt
                            </div>
                            <div className='text-base'>
                                Phone: 19001666
                            </div>
                            <div className='flex text-4xl'>
                                <NavLink to='' title='Follow on Facebook' className='text-black hover:text-white mr-4'>
                                    <AiFillFacebook />
                                </NavLink>
                                <NavLink to='' title='Follow on Instagram' className='text-black hover:text-white mr-4'>
                                    <AiFillInstagram />
                                </NavLink>
                                <NavLink to='' title='Mail' className='text-black hover:text-white'>
                                    <AiOutlineMail />
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 className='uppercase text-xl font-bold'>Chính sách</h2>
                            <div className='grid grid-rows text-lg'>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Chính sách quy định chung
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Phương thức thanh toán
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Chính sách vận chuyển
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Quy định đổi trả
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Bảo mật thông tin
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 className='uppercase text-xl font-bold'>Hỗ trợ</h2>
                            <div className='grid grid-rows text-lg'>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Dịch vụ sửa chữa
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Video phượt
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Thông tin thanh toán
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <h2 className='uppercase text-xl font-bold'>Hợp tác kinh doanh</h2>
                            <div className='grid grid-rows text-lg'>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Đối tác khách hàng
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Sự kiện - tài trợ
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Đánh giá từ khách hàng
                                </NavLink>
                                <NavLink to='' className='text-black hover:text-white'>
                                    Cộng tác viên
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center py-4'>
                Created by Hieu
            </div>
        </div>
    )
}
