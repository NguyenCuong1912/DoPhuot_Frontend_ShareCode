import React, { Fragment, useEffect, useState } from 'react'
import { ADD_CART } from './../../../redux/Types/QuanLyCartType';
import { message } from 'antd';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction, GetDetailProductAction } from './../../../redux/Actions/QuanLyProductAction';
import { IMG } from '../../../utils/Settings/config';
import OneProduct from '../../../component/Product/OneProduct';

export default function ProductDetail(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch()

    const { detailProduct } = useSelector(state => state.QuanLyProductReducer);
    const [number, setNumber] = useState(1);

    const { lstProduct } = useSelector(state => state.QuanLyProductReducer);

    const renderProduct = () => {
        return lstProduct?.slice(0, 6).map((item, index) => {
            return <OneProduct key={index} product={item} />
        })
    }


    useEffect(() => {
        dispatch(GetDetailProductAction(id))
        dispatch(GetAllProductAction())
    }, [])
    return (
        <Fragment>
            <div className='my-20 grid grid-cols-10 mt-64'>
                <div className='col-start-3 col-span-6 flex'>
                    <div className='grid grid-cols-12 z-20'>
                        <div className='col-span-9'>
                            <img src={`${IMG}${detailProduct.ProductImage}`} alt='' />
                        </div>
                        <div className='col-span-2 z-0' style={{ width: '760px', marginLeft: '-450px' }}>
                            <div className='border-b-2 grid grid-rows'>
                                <span className='text-3xl font-medium py-2'>
                                    {detailProduct.ProductName}
                                </span>
                            </div>
                            <div className='py-4 border-b-2 flex'>
                                <span className='text-4xl font-bold text-red-500'>{(detailProduct.Price - detailProduct.Price * detailProduct.Discount * 0.01).toLocaleString()} <span className='underline'>đ</span></span>
                                <span className='text-xl font-medium text-gray-600 line-through py-2 px-4'>{(detailProduct.Price * 1).toLocaleString()} <span className='underline'>đ</span></span>
                            </div>

                            <div className='my-4 text-lg'>
                                {detailProduct.Description}
                            </div>


                            <div>
                                <span className='font-bold'>Số lượng</span>
                                <div className='h-10 flex'>
                                    <button id='decrease' type='button' onClick={() => {

                                        if (number <= 1) {
                                            setNumber(1)
                                        } else {
                                            setNumber(number - 1)
                                        }


                                    }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlineMinus /></button>
                                    <input type="text" disabled id='soluong' value={number} name="number" className="text-center w-1/12 p-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:ring-red-500 block sm:text-sm focus:ring-1" />
                                    <button type='button' onClick={() => {
                                        setNumber(number + 1)
                                    }} className='border-2 text-lg px-1 hover:text-red-500 hover:border-red-500'><AiOutlinePlus /></button>
                                </div>
                                <div className='my-4'>
                                    <button type='button' onClick={() => {
                                        dispatch({
                                            type: ADD_CART,
                                            data: {
                                                item: detailProduct, number
                                            }
                                        })
                                        message.success('Sản phẩm đã được thêm vào giỏ hàng')
                                    }} className='uppercase flex border-2 p-2 text-white bg-black rounded-md text-xl hover:bg-teal-500'>Mua hàng <AiOutlineShoppingCart className='mt-2 mx-2 mb-1' /></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-10 mb-20'>
                <div className='col-start-3 col-span-6 border-t pt-4'>
                    <div className='mb-4'>
                        <h3 className='text-3xl uppercase'>Mô tả</h3>
                        <span className='text-base'>
                            {detailProduct.Description}
                        </span>
                    </div>
                    <div className='col-span-2'>
                        <img className='w-full shadow-lg' src={`${IMG}${detailProduct.ProductImage}`} alt='' />
                    </div>
                    <div className='mt-28 border-t pt-4'>
                        <h1 className='uppercase text-2xl'>Các sản phẩm khác</h1>
                        <div className='flex text-center'>
                            {renderProduct()}
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
