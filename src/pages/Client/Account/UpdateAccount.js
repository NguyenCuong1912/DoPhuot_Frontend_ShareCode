import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateAccountAction } from '../../../redux/Actions/QuanLyAccountAction';

export default function UpdateAccount() {
    const dispatch = useDispatch();


    const { userLogin } = useSelector(state => state.QuanLyAccountReducer);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Username: userLogin.account.Username,
            PasswordOld: '',
            Password: '',
            Role: 'CLIENT',
            PhoneNumber: userLogin.account.PhoneNumber,
            Address: userLogin.account.Address
        },
        validationSchema: Yup.object({
            PasswordOld: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

            Password: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

            PhoneNumber: Yup.string()
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
                    message: "Số điện thoại chưa đúng",
                    excludeEmptyString: false,
                })
                .required("Không được trống !"),

            Address: Yup.string()
                .required("Không được trống !"),
        }),
        onSubmit: values => {
            if (values.PasswordOld === userLogin.account.Password) {
                dispatch(UpdateAccountAction(userLogin.account.id, values))
            }
            else {
                alert('Mật khẩu cũ không đúng!')
            }
        }
    })
    return (
        <div className='grid grid-cols-12 mt-56'>
            <div className='col-start-3 col-span-9'>
                <div className='grid grid-rows mx-8'>
                    <span className='uppercase text-2xl text-yellow-500 font-bold font-serif'>Thông tin tài khoản</span>
                    <div className='p-4 w-3/4'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='mb-2'>Tài khoản:</div>
                            <input type="text" name='Username' value={formik.values.Username} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' disabled />
                            <div className='mt-4 mb-2'>Số điện thoại:</div>
                            <input type="text" name='PhoneNumber' onChange={formik.handleChange} value={formik.values.PhoneNumber} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập số điện thoại..." />
                            {formik.errors.PhoneNumber && formik.touched.PhoneNumber && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.PhoneNumber}</p>
                            )}
                            <div className='mt-4 mb-2'>Địa chỉ:</div>
                            <input type="text" name='Address' onChange={formik.handleChange} value={formik.values.Address} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập địa chỉ..." />
                            {formik.errors.Address && formik.touched.Address && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Address}</p>
                            )}
                            <h1 className='mt-4 uppercase text-2xl font-bold'>Thay đổi mật khẩu</h1>
                            <span className='mt-4 italic text-base'>Để đảm bảo tính bảo mật vui lòng đặt mật khẩu trên 6 ký tự!</span>
                            <div className='mt-4 mb-2'>Mật khẩu cũ:</div>
                            <input type="text" name='PasswordOld' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập mật khẩu cũ..." />
                            {formik.errors.PasswordOld && formik.touched.PasswordOld && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.PasswordOld}</p>
                            )}
                            <div className='mt-4 mb-2'>Mật khẩu mới:</div>
                            <input type="text" name='Password' onChange={formik.handleChange} className='p-3 border-gray border rounded-lg focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 w-full' placeholder="Nhập mật khẩu mới..." />
                            {formik.errors.Password && formik.touched.Password && (
                                <p className='m-0 mt-1 text-red-600'>{formik.errors.Password}</p>
                            )}
                            <div className='text-end mt-16'>
                                <button type='submit' className='px-4 py-2 border rounded text-lg font-bold hover:text-white hover:bg-yellow-500' >Cập nhật</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
