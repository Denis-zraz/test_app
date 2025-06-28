// import React from 'react'

// import { ChevronDownIcon } from '@heroicons/react/16/solid';

export default function Header() {
    return (
        <header className='flex flex-col'>
            <div className='flex flex-row h-20 bg-[#202F55]'>
                <div
                    className="absolute left-10 top-2.5 w-[73px] h-[61px]
     font-['Days_One'] text-5xl leading-[61px]
     text-[#40F3F7]"
                >
                    3S
                </div>
                <div className='absolute w-[34px] h-0 left-[100px] top-10 border-solid border-1 border-[#4F669D] transform rotate-90' />
                <p className='absolute w-16 h-[29px] left-[123px] top-7 text-[11px] font-normal text-[#4F669D] leading-[13px]'>
                    SPA NETWORK
                </p>
                <a
                    className="absolute w-[169px] h-[22px] left-[247px] top-7 font-['Roboto'] font-medium text-white leading-[22px] text-[18px] tracking-[0.01em] cursor-pointer"
                    href='#'
                >
                    PAYMENT SYSTEMS
                </a>
                <a
                    className="absolute w-[99px] h-[18px] left-[467px] top-7 font-['Roboto'] font-medium text-white leading-[18px] text-[18px] tracking-[0.01em] cursor-pointer"
                    href='#'
                >
                    REFERRALS
                </a>
            </div>
            <p className="absolute w-2 h-[22px] left-[877px] top-7 font-['Roboto'] font-medium text-white leading-[22px] text-[18px] tracking-[0.01em] cursor-pointer">
                $
            </p>
            <select className="absolute outline-none w-16 h-[24px] text-left left-[888px] top-[27px] bg-[#202F55] font-['Roboto'] font-medium text-white leading-[18px] text-[18px] tracking-[0.01em] cursor-pointer">
                {/* <option selected>Open this select menu</option> */}
                <option value='1'>500</option>
                <option value='2'>600</option>
                <option value='3'>700</option>
            </select>
            {/* <p className="absolute w-8 h-[18px] left-[890px] top-[30px] font-['Roboto'] font-medium text-white leading-[18px] text-[18px] tracking-[0.01em] cursor-pointer">
                500
            </p> */}
            {/* <ChevronDownIcon className='absolute z-10 w-4 h-4 left-[930px] top-8 text-[#4F669D] cursor-pointer' /> */}
        </header>
    );
}
