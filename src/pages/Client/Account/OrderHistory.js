import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetCheckoutHistory } from '../../../redux/Actions/QuanLyCheckoutAction';
import { IMG } from '../../../utils/Settings/config';
import moment from 'moment';

export default function OrderHistory() {
    const dispatch = useDispatch();

    const { cartHistory } = useSelector(state => state.QuanLyCartReducer);

    useEffect(() => {
        dispatch(GetCheckoutHistory())
    }, [])

    const renderTable = () => {
        return cartHistory?.map((item, index) => {
            return <div className='p-4 border-2 rounded-lg border-yellow-500 shadow-2xl my-8' key={index}>
                <span className='text-lg my-2'><span className='font-bold'>Hóa đơn:</span> <span className='text-yellow-500'>{item.Bill.id}</span> - <span className='font-bold'>Ngày thanh toán :</span> <span className='text-yellow-500'>{moment(item.Bill.createdAt).format('DD/MM/YYYY')}</span></span>
                {item.Detail.map((detail, indexD) => {
                    return <div key={indexD} className='flex justify-between border-b-2 p-3 items-center my-2'>
                        <div className='w-36'>
                            <img src={`${IMG}${detail.Product.ProductImage}`} alt='123' />
                        </div>
                        <p>{detail.Product.ProductName}</p>
                        <div className='flex'>
                            <p>{(detail.Price * 1).toLocaleString()} <span className='underline mr-4'>đ</span></p>
                            <span>x{detail.Quantity}</span>
                        </div>
                        <p>{detail.Discount}%</p>
                        <p className='text-base font-medium text-red-500'>{((detail.Price - detail.Price * detail.Discount / 100) * detail.Quantity).toLocaleString()} <span className='underline mr-4'>đ</span></p>

                    </div>
                })}
                <div className='flex justify-end text-right py-2'>
                    <div >
                        <span className='text-2xl'>Tổng tiền: {(1 * item.Bill.TotalMoney).toLocaleString()}đ</span>

                    </div>
                </div>
            </div>
        })
    }
    return (
        <Fragment>
            <div className='grid grid-cols-5 mt-56 mb-16'>
                <div className='col-start-2 col-span-3 mt-4'>
                    <h2 className='text-4xl font-bold text-center text-yellow-500'>Lịch sử đặt hàng</h2>
                    {renderTable()}
                </div>
            </div>
        </Fragment>
    )
}
