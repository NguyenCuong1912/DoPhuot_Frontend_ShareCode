import React from 'react'
import { NavLink } from 'react-router-dom';
import { IMG } from '../../utils/Settings/config';
import _ from 'lodash'
import { useDispatch } from 'react-redux';
import { ADD_CART } from './../../redux/Types/QuanLyCartType';
import { message } from 'antd';
import { _detail } from './../../utils/Utils/ConfigPath';

export default function OneProduct(props) {
    const { product } = props;
    const dispatch = useDispatch();
    return (
        <div className='mx-2 mb-4 border shadow-lg'>
            <div className='relative'>
                <NavLink to={`${_detail}/${product.id}`} title={`${product.ProductName}`}>
                    <img className='hover:scale-105' src={`${IMG}${product.ProductImage}`} alt={`${product.ProductName}`} />
                </NavLink>
                {product.Hot == true ? <div className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-red-500 text-white'>
                    Hot
                </div> : ''}
                {product.Discount > 0 ? <div className='absolute bottom-2 left-2 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white'>
                    {product.Discount}%
                </div> : ''}
            </div>

            <NavLink to='' title={product.ProductName}>
                <h3 className='mx-4 hover:text-yellow-400'>{_.truncate(product.ProductName, { 'length': 20, })}</h3>
            </NavLink>
            {product.Discount > 0 ? <div className='flex justify-around mb-2'>
                <div className='line-through'>
                    {(product.Price * 1).toLocaleString()} <span className='underline'>đ</span>
                </div>
                <div className='font-medium text-red-500'>
                    {(product.Price - product.Price * product.Discount / 100).toLocaleString()} <span className='underline'>đ</span>
                </div>
            </div> : <div className='font-medium text-red-500'>
                {(product.Price * 1).toLocaleString()} <span className='underline'>đ</span>
            </div>}
            <div className='my-2'>
                <button onClick={() => {
                    dispatch({
                        type: ADD_CART,
                        data: {
                            item: product,
                            number: 1
                        }
                    })
                    message.success('Sản phẩm đã được thêm vào giỏ hàng')
                }} className='border py-2 w-1/2 rounded-md font-medium hover:bg-yellow-500'>
                    Đặt hàng
                </button>
            </div>
        </div>
    )
}
