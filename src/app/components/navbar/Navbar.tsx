import React from 'react';
import Logo from '@/assets/logo.png';
import Down from '@/assets/down.png';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <header className='bg-[var(--black)] text-white py-2 px-8 flex justify-between text-[10px] md:text-xs lg:text-base font-semibold '>
            <Image src={Logo} className='w-12 md:w-14 lg:w-16 h-10 md:h-12 lg:h-14' alt='Logo' />
            <div>
                <ul className='list-none menu flex flex-row'>
                    <a href='/#home'>
                        <li>HOME</li>
                    </a>
                    <a href='/#mbti-percentages'>
                        <li>MBTI Percentages</li>
                    </a>

                    <li>
                        {/* <DropDown /> */}
                        <button className='flex flex-row'>
                            <a>Personalized Sales</a>
                            <Image src={Down} className=' w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6' alt='' />
                        </button>
                        <ul className='menu-sub'>
                            <Link href='/#Analysis'>
                                <li>Analysis</li>
                            </Link>
                            <Link href='/#Diplomats'>
                                <li>Diplomats</li>
                            </Link>
                            <Link href='/#Sentinels'>
                                <li>Sentinels</li>
                            </Link>
                            <Link href='/#Explorers'>
                                <li>Explorers</li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
