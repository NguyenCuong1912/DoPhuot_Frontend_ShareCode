import { Input, Table } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { _admin, _bill, _detail } from '../../../utils/Utils/ConfigPath';
import { AiFillHeart, AiOutlineMore } from 'react-icons/ai';
import moment from 'moment'
import { GetListBill } from '../../../redux/Actions/QuanLyCheckoutAction';

export default function QuanLyBill() {
    const { Search } = Input;
    const dispatch = useDispatch();


    const { lstBill } = useSelector(state => state.QuanLyCartReducer);
    useEffect(() => {
        dispatch(GetListBill())
    }, [])
    const onSearch = (value) => {
        console.log(value)
    };

    const columns = [
        {
            title: 'Tài khoản',
            dataIndex: 'Username',
            render: (text, cart) => {
                return <span title='Chi tiết hóa đơn' onClick={() => {
                    history.push(`${_admin}${_bill}${_detail}/${cart.id}`)
                }} className='text-base hover:underline cursor-pointer hover:text-yellow-500'>
                    {cart.Account.Username}
                </span>
            }
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'PhoneNumber',
            render: (text, cart) => {
                return <span className='text-base'>
                    {cart.Account.PhoneNumber === null ? <span className='text-yellow-500 italic'>Chưa có số điện thoại....</span> : <span>{cart.Account.PhoneNumber}</span>}
                </span>
            }

        },
        {
            title: 'Địa chỉ',
            dataIndex: 'Address',
            render: (text, cart) => {
                return <span className='text-base'>
                    {cart.Account.Address === null ? <span className='text-yellow-500 italic'>Chưa có địa chỉ....</span> : <span>{cart.Account.Address}</span>}
                </span>
            }

        },
        {
            title: 'Tổng tiền',
            dataIndex: 'TotalMoney',
            render: (text, cart) => {
                return <span className='text-base font-medium text-red-500'>
                    {(cart.TotalMoney * 1).toLocaleString()} <span className='underline'>đ</span>
                </span>
            }
        },
        {
            title: 'Ngày thanh toán',
            dataIndex: 'createdAt',
            render: (text, cart) => {
                return <span className='text-base'>
                    {moment(cart.createdAt).format('DD/MM/YYYY')}
                </span>
            }

        },

        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Xem chi tiết hóa đơn' onClick={() => {
                        history.push(`${_admin}${_bill}${_detail}/${item.id}`)
                    }}>
                        <AiOutlineMore style={{ fontSize: 30 }} />
                    </button>
                </div>
            },
            width: '10%'

        },
    ]
    return (
        <Fragment>
            <div className='container mt-4'>
                <div className='flex justify-center'>
                    <h2 className='text-4xl font-bold text-yellow-500 flex items-center'>Quản lý hóa đơn</h2>
                </div>
                <div className='my-10 flex justify-end'>
                    <div className='w-1/3'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstBill} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
