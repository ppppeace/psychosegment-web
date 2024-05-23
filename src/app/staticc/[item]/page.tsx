'use server';
// 'use server';
// import React from 'react';
// import Image from 'next/image';
// import picBac from '@/assets/pageTwo.jpg';
// import Navbar from '@/app/components/navbar/Navbar';
// import Footer from '@/app/components/footer/Footer';
// import { getMBTIByType } from '@/app/repositories/mbti_db';

// export default async function Fastapi({
//     params
// }: {
//     params: {
//         item: string;
//     };
// }) {
//     async function getData() {
//         try {
//             const res = await fetch('http://127.0.0.1:3000/json/' + params.item);
//             console.log('res:', res);
//             return await res.json();
//         } catch (error) {
//             console.log('error:', error);
//         }
//     }

//     const data = await getData();
//     console.log('data:', data);
//     //     const mbtiTypeData = await getMBTIByType(data);
//     //     return (
//     //         <>
//     //             <div>{data}</div>
//     //             <h1>
//     //                 {mbtiTypeData && (
//     //                     <div>
//     //                         <div>{mbtiTypeData.name}</div>
//     //                     </div>
//     //                 )}
//     //             </h1>
//     //         </>
//     //     );
//     // }
//     const mbtiTypeData = await getMBTIByType(data);

import React from 'react';
import Image from 'next/image';
import picBac from '@/assets/pageTwo.jpg';
import Navbar from '@/app/components/navbar/Navbar';
import Footer from '@/app/components/footer/Footer';
import { getMBTIByType } from '@/app/repositories/mbti_db';

export default async function Fastapi({
    params
}: {
    params: {
        item: string;
    };
}) {
    async function getData() {
        try {
            const res = await fetch('http://127.0.0.1:3000/json/' + params.item);
            console.log('res:', res);
            return await res.json();
        } catch (error) {
            console.log('error:', error);
        }
    }

    const data = await getData();
    console.log('data is:', data);
    const mbtiTypeData = await getMBTIByType(data);

    return (
        <>
            <Navbar />
            <div className='bg-[var(--alabaster)]'>
                <div className='ml-12 md:ml-16 lg:ml-20 my-0 md:my-2 grid grid-cols-3 gap-4'>
                    <div className='flex'>
                        <div>
                            <div>
                                <h1 className='text-xs md:text-base lg:text-2xl rotate-topic ro font-semibold mt-1 md:mt-4 lg:mt-6'>
                                    PsychoSegment Insight Hub
                                </h1>
                                <div className='ml-12 md:ml-16 lg:ml-20 row-span-2 '>
                                    <Image src={picBac} alt='' className=' h-max w-max' width={550} height={1000} layout='responsive' />
                                </div>
                            </div>
                            <div className='type font-semibold text-lg md:text-3xl lg:text-5xl text-[var(--red-primary)] m-0'>
                                <h1>
                                    {mbtiTypeData && (
                                        <div>
                                            <div>{mbtiTypeData.name}</div>
                                        </div>
                                    )}
                                </h1>
                            </div>
                        </div>

                        <div className='m-0' style={{ borderLeft: '3px solid black', height: '100%' }}>
                            {/* ตัวอย่างเส้นแนวตั้ง */}
                        </div>
                    </div>
                    <div className='col-start-2 flex col-span-2'>
                        <div>
                            <div className='flex'>
                                <div className='ml-5 md:ml-8 lg:ml-10 marketing text-[10px] md:text-base lg:text-xl text-white'>
                                    <h5 className='mt-0 md:m-3 lg:m-5'>
                                        {mbtiTypeData && (
                                            <div>
                                                <div>{mbtiTypeData.detail}</div>
                                            </div>
                                        )}
                                    </h5>
                                </div>
                                <div className='font-semibold text-2xl md:text-5xl lg:text-7xl text-[var(--red-primary)]'>
                                    <h1 className='text-center mt-24 md:mt-32 lg:mt-40 mx-10 md:mx-14 lg:mx-20 '>
                                        {mbtiTypeData && (
                                            <div>
                                                <div>{mbtiTypeData.type}</div>
                                            </div>
                                        )}
                                    </h1>
                                </div>
                            </div>
                            <div className='ml-5 md:ml-8 lg:ml-10 list-marketing text-[8px] md:text-sm lg:text-xl text-white'>
                                <ul className='m-0 md:m-3 lg:m-5 list-outside '>
                                    {mbtiTypeData && (
                                        <div>
                                            <div>{mbtiTypeData.marketing}</div>
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
