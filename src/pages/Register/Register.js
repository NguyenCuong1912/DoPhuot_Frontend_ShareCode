import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { _login } from '../../utils/Utils/ConfigPath'
import { _logo } from '../../utils/Utils/ImgPath'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik'
import * as Yup from "yup"
import { RegisterAction } from '../../redux/Actions/QuanLyAccountAction';


export default function Register() {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            Username: '',
            Password: '',
            Role: "CLIENT"
        },
        validationSchema: Yup.object({
            Username: Yup.string()
                .required("Không được trống !"),
            Password: Yup.string()
                .min(6, "Tối thiểu 6 kí tự")
                .required("Không được trống !"),

        }),

        onSubmit: values => {
            dispatch(RegisterAction(values))
        },
    });
    return (
        <Fragment>
            <div className='grid grid-cols-12 h-screen content-center'>
                <div className='col-start-5 col-span-4'>
                    <div className='border p-4 rounded-md shadow-lg'>
                        <div className='uppercase mb-8 font-bold text-3xl flex justify-around items-center'>
                            <div>
                                Đăng ký
                            </div>
                            <img className='h-20' src={_logo} alt='Phượt bụi Store' />
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="text" name="Username" onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                {formik.errors.Username && formik.touched.Username && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Username}</p>
                                )}
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tài khoản</label>
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input type="password" name="Password" onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-yellow-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer" placeholder=" " required />
                                {formik.errors.Password && formik.touched.Password && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Password}</p>
                                )}
                                <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mật khẩu</label>
                            </div>
                            <button type="submit" className="text-white bg-yellow-300 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-lg w-full lg:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500">Đăng ký</button>
                            <div className='mt-4'>
                                Bạn đã có tài khoản. <NavLink to={_login} className='font-medium text-black hover:text-yellow-400 hover:underline'>Đăng nhập ngay</NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
