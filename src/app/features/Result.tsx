import Image from 'next/image';
import React from 'react';
import picBac from '@/assets/bac.png';
import mbti from '@/assets/MBTI.jpg';

function Result() {
    return (
        <div>
            <div className='ml-20 my-2 grid grid-cols-3 gap-4'>
                <div className='flex'>
                    <div>
                        <div>
                            <h1 className='text-2xl rotate-topic ro font-semibold mt-6'>PsychoSegment Insight Hub</h1>
                            <div className='ml-20 row-span-2 '>
                                <Image src={mbti} alt='' className=' h-max w-max' layout='responsive' />
                                {/* <div className='resultBox mr-10 '>
                                <div className='m-5'></div>
                                </div> */}
                            </div>
                        </div>
                        <div className='type font-semibold text-5xl text-[var(--red-primary)] m-0'>
                            <h1>
                                The
                                <br /> Visionary
                            </h1>
                        </div>
                    </div>

                    <div className='m-0' style={{ borderLeft: '3px solid black', height: '100%' }}>
                        {/* ตัวอย่างเส้นแนวตั้ง */}
                    </div>
                </div>
                <div className='col-start-2 flex '>
                    <div>
                        <div className='flex'>
                            <div className='ml-10 marketing text-xl text-white'>
                                <h5 className='m-5'>
                                    Enthusiastically imaginative and endlessly curious, the vibrant personalities of ENTPs light up any room. With an
                                    infectious zest for life, they are the spirited architects of innovation, weaving creativity into the fabric of
                                    every idea. Their charming charisma is a beacon, drawing others into the captivating world of endless
                                    possibilities. Embrace the journey with an ENTP and explore the boundless horizons of imagination and ingenuity!
                                </h5>
                            </div>
                            <div className='font-semibold text-7xl text-[var(--red-primary)]'>
                                <h1 className='text-center mt-40 ml-20'>ENTP</h1>
                            </div>
                        </div>
                        <div className='ml-10 list-marketing text-xl text-white'>
                            <ul className='m-5 list-outside'>
                                <li>Innovative Insights: Capture the ENTPs imaginative spirit.</li>
                                <li>Groundbreaking Solutions: Showcase your offering as a trailblazing answer.</li>
                                <li>Fuel Discussion: Encourage conversations about its limitless applications and future possibilities.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
