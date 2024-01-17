import Image from 'next/image';
import React from 'react';
import Triangle from '@/assets/web_red_element.png';

function Welcome() {
    return (
        <div className='md:container md:mx-auto w-full'>
            <div className='text-center my-24 '>
                <div className='text-2xl font-semibold' id='home'>
                    WELCOME TO THE
                </div>
                <h1 className='text-primary text-5xl mt-10 font-normal'>PsychoSegment Insight Hub</h1>
                <h5 className='mt-10 text-lg'>
                    <div>where the intersection of psychology and customer</div>
                    <div>segmentation meets the power of social listening.</div>
                    <div>Uncover a new dimension of understanding as we</div>
                    <div>delve into the intricacies of consumer behavior,</div>
                    <div>employing cutting-edge psychological insights to</div>
                    <div>revolutionize your approach to market segmentation.</div>
                </h5>
            </div>
            {/* <div>
                <Image src={Triangle} alt='triangle' className='w-full top-0 right-0' />
            </div> */}
        </div>
    );
}

export default Welcome;
