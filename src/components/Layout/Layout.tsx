// import React from 'react'

import { Outlet } from 'react-router-dom';
import Header from '../Header';

export default function Layout() {
    return (
        <section className='w-[1440px] h-[1080px] m-auto'>
            <Header />
            <Outlet />
        </section>
    );
}
