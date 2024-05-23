import Image from 'next/image';
import React from 'react';
import Triangle from '@/assets/TV.png';
function Welcome() {
    return (
        <div className='w-full relative '>
            <div className='text-center absolute w-full flex justify-center'>
                <div className='max-w-screen-md mt-5 md:mt-8 lg:mt-10'>
                    <div className='text-xs md:text-base lg:text-2xl font-semibold ' id='home'>
                        WELCOME TO THE
                    </div>
                    <h1 className='text-primary text-lg md:text-3xl lg:text-5xl mt-2 md:mt-5 lg:mt-7 font-normal'>PsychoSegment Insight Hub</h1>
                    <div>
                        <h5 className='mt-2 md:mt-5 lg:mt-7 text-[10px] md:text-sm lg:text-lg'>
                            <div>where the intersection of psychology and customer</div>
                            <div>segmentation meets the power of social listening.</div>
                            <div>Uncover a new dimension of understanding as we</div>
                            <div>delve into the intricacies of consumer behavior,</div>
                            <div>employing cutting-edge psychological insights to</div>
                            <div>revolutionize your approach to market segmentation.</div>
                        </h5>
                    </div>
                </div>
            </div>
            <Image src={Triangle} alt='background triangle' className='w-full' />
            {/* แก้ขนาดรูป */}
        </div>
    );
}

export default Welcome;
