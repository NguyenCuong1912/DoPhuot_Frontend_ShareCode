import React, { Fragment } from 'react'
import { _mu1 } from '../../utils/Utils/ImgPath'
import OneProduct from './OneProduct'

export default function ProductHome() {
    return (
        <Fragment>
            <div className='text-center my-24'>
                <div className='uppercase font-bold text-2xl border-b'>
                    CÁC SẢN PHẨM HOT
                </div>
                <div className='border-t mt-1'>
                    Áo Gió TNF, Găng Tay Chống Nước, Camera Hành Trình
                </div>
                <div className='grid grid-cols-3 mt-8'>
                    <div className='border-r pr-2'>
                        <div className='border rounded-md shadow-lg'>
                            <img src={_mu1} alt='mu' />
                            <button type='text' className='border my-4 py-2 px-4 rounded-md bg-yellow-400 hover:bg-white'>
                                Xem tất cả các sản phẩm hot
                            </button>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className='grid grid-cols-4 flex-wrap'>
                            <OneProduct />
                            <OneProduct />
                            <OneProduct />
                            <OneProduct />
                            <OneProduct />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
