import React, { useEffect } from 'react'
import { Route } from 'react-router';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function HomeTemplate(props) {
    const { Component, ...restRoute } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {

        return <div className='relative'>
            <Header />
            <Component {...propsRoute} />
            <Footer />
        </div>
    }} />
}
