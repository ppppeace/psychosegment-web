import Image from 'next/image';
import React from 'react';
import LogoFooter from '@/assets/logoFooter.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='bg-black text-white h-28 md:h-36 lg:h-48 pt-3 md:pt-6 lg:pt-8 px-14'>
                <footer className='flex justify-between'>
                    <div className='grid grid-cols-6 pt-5 md:pt-8 lg:pt-10 gap-x-12 md:gap-x-16 lg:gap-x-20 text-xs md:text-base font-semibold'>
                        <a href='/#home' className='col-span-2'>
                            HOME
                        </a>
                        <a href='/#Analysis' className='col-span-2'>
                            Analysis
                        </a>
                        <a href='/#Sentinels' className='col-span-2'>
                            Sentinels
                        </a>
                        <a href='/#mbti-percentages' className='col-span-2'>
                            MBTI Percentages
                        </a>
                        <a href='/#Diplomats' className='col-span-2'>
                            Diplomats
                        </a>
                        <a href='/#Explorers' className='col-span-2'>
                            Explorers
                        </a>
                    </div>

                    <Image src={LogoFooter} alt={'logo'} className='w-16 md:w-28 lg:w-32 h-16 md:h-28 lg:h-36' />
                </footer>
            </div>
        </div>
    );
}

export default Footer;
