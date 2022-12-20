import { Input, Popconfirm, Table } from 'antd';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { history } from '../../../App';
import { _add, _admin, _cate, _edit } from '../../../utils/Utils/ConfigPath';
import { DeleteCate, GetAllCateAction } from './../../../redux/Actions/QuanLyCategoryAction';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';


export default function QuanLyCategory() {
    const { Search } = Input;
    const onSearch = (value) => console.log(value);

    const dispatch = useDispatch();

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCateAction())
    }, [])
    const cancel = (e) => {
        console.log(e);
    };
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'CategoryName',
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, cate) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_admin}${_cate}${_edit}/${cate.id}`)
                    }}>
                        <BsPencilSquare style={{ fontSize: 25 }} />
                    </button>
                    <button className='mx-4 text-red-500 hover:text-red-900' title='Xóa'>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa loại sản phẩm này không?"
                            onConfirm={() => { dispatch(DeleteCate(cate.id)) }}
                            onCancel={cancel}
                            okText="Có"
                            cancelText="Không"
                        >
                            <BsFillTrashFill style={{ fontSize: 25 }} />
                        </Popconfirm>
                    </button>
                </div>
            },
        },
    ]

    return (
        <Fragment>
            <div className='container mt-4'>
                <h2 className='text-4xl font-bold text-center text-yellow-500'>Quản lý loại sản phẩm</h2>
                <div className='my-10 flex justify-between'>
                    <button type='button' className='border-2 border-yellow-700 rounded w-24 h-10 text-lg font-bold text-yellow-500 hover:text-white hover:bg-yellow-600' onClick={() => {
                        history.push(`${_admin}${_cate}${_add}`)
                    }}>Thêm </button>
                    <div className='w-1/2'>
                        <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                    </div>
                </div>
                <Table dataSource={lstCate} columns={columns} rowKey='id' />;
            </div>
        </Fragment>
    )
}
