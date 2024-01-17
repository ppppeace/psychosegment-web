import React from 'react';
import Logo from '@/assets/logo.png';
import Down from '@/assets/down.png';
import Image from 'next/image';

function Navbar() {
    return (
        <header className='bg-[var(--black)] text-white py-2 px-8 flex justify-between text-base font-semibold '>
            <Image src={Logo} className='w-16 h-14' alt='Logo' />
            <nav>
                <ul className='list-none mt-4 menu flex flex-row'>
                    <li>
                        <a href='#home'>HOME</a>
                    </li>
                    <li>
                        <a href='#mbti-percentages'>MBTI Percentages</a>
                    </li>

                    <li>
                        {/* <DropDown /> */}
                        <button className='flex flex-row'>
                            <a>Personalized Sales</a>
                            <Image src={Down} className='w-6 h-6' alt='' />
                        </button>
                        <ul className='menu-sub'>
                            <li>
                                <a href='#Analysis'>Analysis</a>
                            </li>
                            <li>
                                <a href='#Diplomats'>Diplomats</a>
                            </li>
                            <li>
                                <a href='#Sentinels'>Sentinels</a>
                            </li>
                            <li>
                                <a href='#Explorers'>Explorers</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                {/* <div className='dropdown'>AnalysisDiplomatsSentinelsExplorers
                    <button className='dropbtn'>
                        Personalized Sales
                        <Image src={Down} className='w-6 h-6' alt='' />
                    </button>
                    <div className='dropdown-content'>
                        <a href='#personalized-sales'>Link 1</a>
                        <a href='#personalized-sales'>Links 2</a>
                        <a href='#personalized-sales'>Link 3</a>
                    </div>
                </div> */}
            </nav>
        </header>
    );
}

export default Navbar;
