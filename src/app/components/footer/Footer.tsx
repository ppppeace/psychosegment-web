import Image from 'next/image';
import React from 'react';
import LogoFooter from '@/assets/logoFooter.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='bg-black text-white h-48 pt-8 px-14'>
                <footer className='flex justify-between'>
                    <div className='grid grid-cols-6 pt-10 gap-x-20 text-base font-semibold'>
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

                    <Image src={LogoFooter} alt={'logo'} className='w-32 h-36' />
                </footer>
            </div>
        </div>
    );
}

export default Footer;
