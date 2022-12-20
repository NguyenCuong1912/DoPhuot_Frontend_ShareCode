import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { Fragment } from 'react'
import { BsBackspace } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { history } from '../../../App';
import { AddCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { _admin, _cate } from '../../../utils/Utils/ConfigPath';

export default function AddCategory() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            CategoryName: '',
        },
        validationSchema: Yup.object({
            CategoryName: Yup.string()
                .required("Không được trống !"),
        }),
        onSubmit: values => {
            dispatch(AddCateAction(values))
        },
    });
    return (
        <Fragment>
            <div className='grid grid-cols-7'>
                <div>
                    <button type='button' title='Trở về trang loại sản phẩm' className='text-4xl text-yellow-500 hover:text-yellow-700' onClick={() => {
                        history.push(`${_admin}${_cate}`)
                    }}>
                        <BsBackspace />

                    </button>
                </div>
                <div className='col-span-3 col-start-3 mt-32 h-72 rounded-lg shadow-2xl bg-white p-4'>
                    <h1 className='text-center text-4xl font-bold text-yellow-500'>Thêm loại sản phẩm</h1>
                    <div className='p-4'>
                        <form onSubmit={formik.handleSubmit}>
                            <input type="text" name='CategoryName' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 w-full' placeholder="Tên loại sản phẩm..." />
                            {formik.errors.CategoryName && formik.touched.CategoryName && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.CategoryName}</p>
                            )}
                            <div className='text-end mt-16'>
                                <button type='submit' className='border-2 border-yellow-600 rounded w-24 h-10 text-lg font-bold text-yellow-500 hover:text-white hover:bg-yellow-600' >Thêm </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
