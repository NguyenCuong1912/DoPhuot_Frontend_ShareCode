import React, { Fragment } from 'react'

export default function Content1() {
    return (
        <Fragment>
            <div className='text-center my-8'>
                <div className='uppercase text-2xl border-b'>
                    Phượt bụi Store có gì hay?
                </div>
                <div className='border-t mt-1'>
                    Cho phép shop review một số sản phẩm,tin khuyến mại và đánh giá của khách hàng về Shop nhé.
                </div>
                <div className='grid grid-cols-2 my-4'>
                    <div className='grid grid-cols-3'>
                        <div className='pr-2'>
                            <img className='mb-4 cursor-pointer hover:scale-105' src='../img/content1/1.jpg' alt='' />
                            <img className='cursor-pointer hover:scale-105' src='../img/content1/2.jpg' alt='' />
                        </div>
                        <div className='col-span-2 px-2'>
                            <img className='cursor-pointer hover:scale-105' src='../img/content1/3.jpg' alt='' />
                        </div>
                    </div>
                    <div className='grid grid-cols-3 flex-wrap'>
                        <img className='px-2 hover:scale-105 cursor-pointer' src='../img/content1/4.jpg' alt='' />
                        <img className='px-2 hover:scale-105 cursor-pointer' src='../img/content1/5.jpg' alt='' />
                        <img className='px-2 hover:scale-105 cursor-pointer' src='../img/content1/6.gif' alt='' />
                        <img className='px-2 hover:scale-105 cursor-pointer' src='../img/content1/7.jpg' alt='' />
                    </div>
                </div>
                <div className='grid grid-cols-2 my-4'>
                    <img className='mr-4 cursor-pointer hover:scale-105' src='../img/content1/9.png' alt='' />
                    <img className='ml-4 cursor-pointer hover:scale-105' src='../img/content1/10.png' alt='' />
                </div>
            </div>
        </Fragment>
    )
}
