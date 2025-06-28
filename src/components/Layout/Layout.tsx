// import React from 'react'

import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function Layout() {
    return (
        <section className='relative w-[1440px] h-[1080px] m-auto bg-white'>
            <Header />
            <Outlet />
        </section>
    );
}
