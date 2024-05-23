import React from 'react';
//import './Percent.scss';
import Map from '@/assets/location.png';
import Image from 'next/image';
import Manup from '@/assets/manup.png';
import Man from '@/assets/man.png';

import ProgressBar from '../components/bar/PercentBar';
import PercentBar from '../components/bar/PercentBar';

function Percent() {
    return (
        <div className='bg-black text-white pt-14 md:pt-16 lg:pt-20 px-14 md:px-16 lg:px-20 '>
            <h2 className='text-lg md:text-2xl lg:text-4xl text-center' id='mbti-percentages'>
                Thai MBTI Percentages Unveiled
            </h2>

            <ul className='mt-5 md:mt-8 lg:mt-10 grid grid-cols-5 gap-1 md:gap-3 lg:gap-4'>
                <li className='mt-0 md:mt-2 lg:mt-5 col-span-2'>
                    <Image src={Map} alt='logo' className='w-4/5 lg:w-full h-3/5 lg:h-4/5' />
                    <h4 className='text-xs md:text-base lg:text-2xl font-normal text-[var(--red-dark)] text-center mt-0 md:mt-3 lg:mt-5'>
                        Respondents: 125,449
                    </h4>
                </li>
                <li className='mt-0 md:mt-2 lg:mt-5 text-center'>
                    <Image src={Manup} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                    <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5 '>
                        <span className='text-[var(--red-alfa)]'>E</span>
                        <span>xtraverted</span>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Man} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span className='grid grid-flow-col'>Observant</span>
                        </div>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Manup} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span className='text-[var(--red-alfa)]'>F</span>
                            <span>eeling</span>
                        </div>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Man} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span className='grid grid-flow-col'>Judging</span>
                        </div>
                    </div>
                </li>
                <li className='mt-12 md:mt-14 lg:mt-16 text-[var(--red-alfa)] text-[8px] md:text-xs lg:text-base'>
                    <div>
                        <div>+1.67%</div>
                        <PercentBar percent={51.67} />
                    </div>
                    <div className='mt-24 md:mt-28 lg:mt-32 '>
                        <div className='text-right'>+3.17%</div>
                        <div className='right-more'>
                            <PercentBar percent={53.17} />
                        </div>
                    </div>
                    <div className='mt-24 md:mt-28 lg:mt-32 '>
                        <div>+13.11%</div>
                        <PercentBar percent={63.11} />
                    </div>

                    <div className='mt-24 md:mt-28 lg:mt-32 '>
                        <div className='text-right'>+0.81%</div>
                        <div className='right-more'>
                            <PercentBar percent={50.81} />
                        </div>
                    </div>
                </li>
                <li className='mt-0 md:mt-3 lg:mt-5 text-center'>
                    <Image src={Man} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-8 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                    <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                        <span className='grid grid-flow-col'>Introverted</span>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Manup} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span>I</span>
                            <span className='text-[var(--red-alfa)]'>n</span>
                            <span>tuitive</span>
                        </div>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Man} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span className='grid grid-flow-col'>Thinking</span>
                        </div>
                    </div>
                    <div className='mt-2 md:mt-5 lg:mt-7'>
                        <Image src={Manup} alt='' className='w-10 md:w-14 lg:w-16 h-14 md:h-16 lg:h-20 mx-8 md:mx-12 lg:mx-24' />
                        <div className='text-xs md:text-base lg:text-2xl font-normal mt-0 md:mt-3 lg:mt-5'>
                            <span className='text-[var(--red-alfa)]'>P</span>
                            <span>rospecting</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Percent;
