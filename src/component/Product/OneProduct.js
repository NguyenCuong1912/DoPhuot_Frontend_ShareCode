import React from 'react'
import { _yoheden } from '../../utils/Utils/ImgPath'
import { NavLink } from 'react-router-dom';

export default function OneProduct() {
    return (
        <div className='mx-2 mb-4 border shadow-lg'>
            <NavLink to=''>
                <img src={_yoheden} alt='mu' />
            </NavLink>
            <NavLink to=''>
                <h3 className='mx-4 hover:text-yellow-400'>Mũ bảo hiểm Yohe 985 Xám</h3>
            </NavLink>
            <div className='flex justify-around mb-4'>
                <div>
                    100000 d
                </div>
                <div className='font-medium text-red-500'>
                    100000 d
                </div>
            </div>
        </div>
    )
}
