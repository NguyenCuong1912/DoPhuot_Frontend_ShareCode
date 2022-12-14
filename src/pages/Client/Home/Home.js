import React from 'react'
import BannerSlick from '../../../component/Home/BannerSlick'
import Content1 from '../../../component/Home/Content1'
import ProductHome from '../../../component/Product/ProductHome'

export default function Home() {
    return (
        <div className='mt-48'>
            <BannerSlick />
            <div className='grid grid-cols-12'>
                <div className='col-start-3 col-span-8'>
                    <Content1 />
                    <ProductHome />
                </div>
            </div>
        </div>
    )
}
