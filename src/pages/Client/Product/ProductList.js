import React, { Fragment, useEffect } from 'react'
import OneProduct from '../../../component/Product/OneProduct';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProductAction } from '../../../redux/Actions/QuanLyProductAction';
import { GetAllCateAction } from '../../../redux/Actions/QuanLyCategoryAction';

export default function ProductList(props) {
    let { id } = props.match.params;
    const dispatch = useDispatch();
    const { lstProduct } = useSelector(state => state.QuanLyProductReducer);
    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);
    useEffect(() => {
        dispatch(GetAllProductAction())
        dispatch(GetAllCateAction())
    }, [])

    const renderItem = () => {
        return lstProduct?.map((item, index) => {
            return <Fragment>
                {id == item.Category_ID ? <OneProduct key={index} product={item} /> : ''}
            </Fragment>
        })
    }
    const renderProduct = () => {
        return lstProduct?.slice(0, 6).map((item, index) => {
            return <OneProduct key={index} product={item} />
        })
    }

    return (
        <div className='mt-56'>
            <div className='grid grid-cols-5'>
                <div className='col-start-2 col-span-3'>
                    <div className='mb-8 uppercase text-center text-2xl font-bold text-yellow-500'>
                        {lstCate?.map((cate, index) => {
                            return <Fragment>
                                {cate.id == id ? <div>{cate.CategoryName}</div> : ''}
                            </Fragment>
                        })}
                    </div>
                    <div className='grid grid-cols-4 text-center'>
                        {renderItem()}
                    </div>
                    <div className='mt-28 border-t pt-4'>
                        <h1 className='uppercase text-2xl'>Các sản phẩm khác</h1>
                        <div className='flex text-center'>
                            {renderProduct()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
