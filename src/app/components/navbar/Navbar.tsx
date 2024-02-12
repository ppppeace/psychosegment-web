import React from 'react';
import Logo from '@/assets/logo.png';
import Down from '@/assets/down.png';
import Image from 'next/image';

function Navbar() {
    return (
        <header className='bg-[var(--black)] text-white py-2 px-8 flex justify-between text-base font-semibold '>
            <Image src={Logo} className='w-16 h-14' alt='Logo' />
            <div>
                <ul className='list-none  menu flex flex-row'>
                    <a href='#home'>
                        <li>HOME</li>
                    </a>
                    <a href='#mbti-percentages'>
                        <li>MBTI Percentages</li>
                    </a>

                    <li>
                        {/* <DropDown /> */}
                        <button className='flex flex-row'>
                            <a>Personalized Sales</a>
                            <Image src={Down} className='w-6 h-6' alt='' />
                        </button>
                        <ul className='menu-sub'>
                            <a href='#Analysis'>
                                <li>Analysis</li>
                            </a>
                            <a href='#Diplomats'>
                                <li>Diplomats</li>
                            </a>
                            <a href='#Sentinels'>
                                <li>Sentinels</li>
                            </a>
                            <a href='#Explorers'>
                                <li>Explorers</li>
                            </a>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
