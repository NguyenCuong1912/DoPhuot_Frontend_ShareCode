import React, { Fragment, useEffect, useState } from 'react'
import { history } from '../../../App';
import { _admin, _product } from '../../../utils/Utils/ConfigPath';
import { BsBackspace } from 'react-icons/bs';
import { Input, Select, Switch } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllCateAction } from '../../../redux/Actions/QuanLyCategoryAction';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AddProductAction } from './../../../redux/Actions/QuanLyProductAction';


export default function ThemProduct() {
    const { TextArea } = Input;

    const { lstCate } = useSelector(state => state.QuanLyCategoryReducer);

    useEffect(() => {
        dispatch(GetAllCateAction())
    }, [])
    const dispatch = useDispatch();


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Category_ID: '',
            Brand: '',
            Origin: '',
            ProductName: '',
            Material: '',
            Price: '',
            Discount: 0,
            Hot: '',
            Description: '',
            products: {},
        },
        validationSchema: Yup.object({
            Category_ID: Yup.string()
                .required("Không được trống !"),

            Origin: Yup.string()
                .required("Không được trống !"),

            Brand: Yup.string()
                .required("Không được trống !"),

            ProductName: Yup.string()
                .required("Không được trống !"),

            Material: Yup.string()
                .required("Không được trống !"),

            Price: Yup.number()
                .required("Không được trống !"),

            Discount: Yup.number()
                .required("Không được trống !"),

            Hot: Yup.string()
                .required("Không được trống !"),

            Description: Yup.string()
                .required("Không được trống !"),


        }),
        onSubmit: values => {

            values.Discount *= 1;

            let dataProduct = new FormData();
            for (let key in values) {
                if (key !== 'products') {
                    dataProduct.append(key, values[key]);
                }
                else {
                    dataProduct.append('products', values.products, values.products.name);
                }
            }

            dispatch(AddProductAction(dataProduct));

        }
    })
    function changeSelect(value) {
        formik.setFieldValue('Category_ID', value)
    }
    const onChange = (checked) => {
        formik.setFieldValue('Hot', checked)
    };

    const [img, setImg] = useState('');
    const handleChangeFile = (e) => {

        let file = e.target.files[0]
        if (file.type === 'image/jpeg' || file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImg(e.target.result) //Hinh base 64
            }
            formik.setFieldValue('products', file)
        }

    }
    return (
        <Fragment>
            <div>
                <div>
                    <button type='button' title='Trở về trang sản phẩm' className='text-4xl text-yellow-500 hover:text-yellow-700' onClick={() => {
                        history.push(`${_admin}${_product}`)
                    }}>
                        <BsBackspace />

                    </button>
                </div>
                <h1 className='text-center text-4xl font-bold text-yellow-500'>Thêm sản phẩm</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className='grid grid-cols-7'>
                        <div className='col-start-2 col-span-2 mr-4'>
                            <div className='my-4'>
                                <div>Loại sản phẩm:</div>
                                <Select className='w-2/3 shadow-lg' placeholder='Chọn loại sản phẩm' name='Category_ID' size='large' onChange={changeSelect}>
                                    {lstCate.map((item, index) => {
                                        return <Select.Option key={index} value={item.id}>{item.CategoryName}</Select.Option>
                                    })}
                                </Select>

                            </div>
                            <div className='my-4'>
                                <div>Xuất xứ:</div>
                                <input type='text' name='Origin'
                                    onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Xuất xứ...' />
                                {formik.errors.Origin && formik.touched.Origin && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Origin}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Thương hiệu:</div>
                                <input type='text' name='Brand'
                                    onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Thương hiệu...' />
                                {formik.errors.Brand && formik.touched.Brand && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Brand}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Tên sản phẩm:</div>
                                <input type='text' name='ProductName'
                                    onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Tên sản phẩm...' />
                                {formik.errors.ProductName && formik.touched.ProductName && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.ProductName}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Chất liệu:</div>
                                <input type='text' name='Material'
                                    onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Chất liệu...' />
                                {formik.errors.Material && formik.touched.Material && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Material}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <span className='mr-2'>Hình ảnh:</span>
                                <input name='products' type='file' onChange={handleChangeFile} accept='image/jpeg, image/jpg, image/png' />
                            </div>
                            <div className='my-4'>
                                <img className='w-36 h-36 rounded-md' src={img} alt='...' />
                            </div>

                        </div>
                        <div className='col-span-3 ml-4'>
                            <div className='my-4'>
                                <div>Giá tiền:</div>
                                <input type='number' name='Price' onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Giá tiền...' />
                                {formik.errors.Price && formik.touched.Price && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Price}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Ưu đãi:</div>
                                <input type='number' name='Discount' onChange={formik.handleChange} className='p-2 px-4 border w-2/3 rounded drop-shadow-lg hover:border-yellow-500 focus:outline-none focus:border focus:border-yellow-500' placeholder='Ưu đãi...' />
                                {formik.errors.Discount && formik.touched.Discount && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Discount}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Hot:</div>
                                <Switch defaultChecked name='Hot' onChange={onChange} />
                                {formik.errors.Hot && formik.touched.Hot && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Hot}</p>
                                )}
                            </div>
                            <div className='my-4'>
                                <div>Mô tả:</div>
                                <TextArea name='Description' onChange={formik.handleChange} rows={9} style={{ boxShadow: 'rgb(0 0 0 / 10%) 0px 10px 25px -5px, rgb(0 0 0 / 4%) 0px 10px 10px -5px' }} />
                                {formik.errors.Description && formik.touched.Description && (
                                    <p className='m-0 mt-1 text-red-600'>{formik.errors.Description}</p>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='text-center p-3 border border-yellow-600 w-36 text-xl font-bold rounded text-yellow-500 hover:bg-yellow-600 hover:text-white'>Thêm</button>
                    </div>
                </form>

            </div>
        </Fragment>
    )
}
