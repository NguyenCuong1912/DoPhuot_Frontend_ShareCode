import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IMG } from '../../../utils/Settings/config';
import { DELETE_CART, UPDATE_CART } from '../../../redux/Types/QuanLyCartType';
import { CheckoutAction } from '../../../redux/Actions/QuanLyCheckoutAction';

export default function Cart() {
    const dispatch = useDispatch();

    const { cart } = useSelector(state => state.QuanLyCartReducer);

    let total = 0;
    cart?.forEach(item => {
        total += (item.Price - (item.Price * (item.Discount / 100))) * item.Quantity
    });

    const renderCart = () => {
        return cart?.map((item, index) => {
            return <tr key={index}>
                <th className='grid grid-cols-4 mt-6'>
                    <img src={`${IMG}${item.ProductImage}`} alt={item.ProductName} />
                    <div className='col-span-3 pl-4 text-start'>
                        <div className='text-xl text-red-600'>{item.ProductName}</div>
                        <div className='font-normal my-2'>{item.Description}</div>
                        <button type='button' onClick={() => {
                            dispatch({
                                type: DELETE_CART,
                                data: {
                                    id: item.Product_ID
                                }
                            })
                        }} className='text-red-600 hover:text-red-700'>Xóa</button>
                    </div>
                </th>
                <th className='text-lg text-red-500'>
                    {item.Discount} %
                </th>
                <th className='text-xl'>
                    {(item.Price * 1).toLocaleString()} đ
                </th>
                <th style={{ width: 150 }}>
                    <div className='h-10 flex justify-center'>
                        <button id='decrease' type='button' onClick={(e) => {
                            dispatch({
                                type: UPDATE_CART,
                                data: {
                                    soLuong: -1,
                                    id: item.Product_ID
                                }
                            })
                        }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                        <input type="text" disabled value={item.Quantity} id='soluong' name="number" className="text-center w-1/4 p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block sm:text-sm focus:ring-1" />
                        <button type='button' onClick={() => {
                            dispatch({
                                type: UPDATE_CART,
                                data: {
                                    soLuong: 1,
                                    id: item.Product_ID
                                }
                            })
                        }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                    </div>
                </th>
                <th className='text-xl'>
                    {((item.Price - (item.Price * (item.Discount / 100))) * item.Quantity).toLocaleString()}đ
                </th>
            </tr>
        })
    }


    return (
        <Fragment>
            <div className='grid grid-cols-5 my-48'>
                <div className='col-start-2 col-span-3'>
                    <div className='py-8 border-b-2 uppercase text-center text-3xl text-yellow-500 font-bold'>Giỏ hàng</div>
                    <div className='mt-4'>
                        <table className='w-full'>
                            <thead>
                                <tr className='border-y-2'>
                                    <th className='w-3/5 py-6'>Sản phẩm</th>
                                    <th>Giảm giá</th>
                                    <th>Đơn giá</th>
                                    <th>Số lượng</th>
                                    <th>Tổng giá</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCart()}

                            </tbody>
                        </table>
                    </div>
                    <div className='border-t-2 mt-16'>
                        <div className='grid grid-cols-12 pt-6'>
                            <div className='col-span-8'>
                            </div>
                            <div className='col-span-4 text-end'>
                                <div>Tạm tính <span className='text-2xl font-medium text-red-600 mx-2'>{total.toLocaleString()} đ</span></div>
                                <div>
                                    <button type='button' onClick={() => {
                                        dispatch(CheckoutAction(cart))
                                    }} className='border bg-yellow-500 text-white py-2 px-4 font-medium rounded hover:bg-yellow-700'>Thanh toán</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
