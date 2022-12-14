
import React from 'react'
import { _slider1, _slider2, _slider3 } from '../../utils/Utils/ImgPath';
import Slider from 'react-slick';

export default function BannerSlick() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: false
    };
    return (
        <div className='static'>
            <Slider {...settings}>
                <div>
                    <img className='w-full' src={_slider1} alt='slider1' />
                </div>
                <div>
                    <img className='w-full' src={_slider2} alt='slider2' />
                </div>
                <div>
                    <img className='w-full' src={_slider3} alt='slider3' />
                </div>
            </Slider>
        </div>
    )
}
