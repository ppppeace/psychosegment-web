import React from 'react';
import Image from 'next/image';
import Square from '@/assets/square.png';
import personality from '@/data/PersonalityData';
import { tree } from 'next/dist/build/templates/app-page';

function Personality() {
    return (
        <div>
            <div className='box-per w-full '>
                <h2 className='text-primary text-4xl rotate flex justify-center'>Personalized Sales: Your Perfect Approach Unleashed</h2>
            </div>
            <div>
                {personality.map((item, index) => {
                    return (
                        <div className='bg-[var(--alabaster)] ' key={index}>
                            {/* style={{ textUnderlinePosition: 'under', textUnderlineOffset: '16px', textDecorationColor: 'item.color' }} */}
                            <div className='text-primary text-4xl ml-7 '>
                                <div className={item.color} id={item.topic}>
                                    <h2>{item.topic}</h2>
                                </div>
                            </div>

                            <div className='list'>
                                {item.list.map((type, num) => {
                                    return (
                                        <div key={num} className='card '>
                                            <div className='grid grid-cols-3'>
                                                <Image src={type.image} alt={type.type} className='w-28 h-28 col-start-1' width={112} height={112} />
                                                <div className='col-start-2 col-span-3'>
                                                    <h5 className='text-2xl'>{type.type}</h5>
                                                    <div className='text-base mt-2'>
                                                        <h5>{type.desc}</h5>
                                                        <ul className='ml-14 list-disc'>
                                                            {/* <ContentList {...type.content} /> */}
                                                            <ContentList text={type.content} />
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className='my-16 ml-96'>
                                <div className={item.line}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );

    // function ContentList(each: string[]) {
    //     return (
    //         <div>
    //             <li>{each}</li>
    //         </div>
    //     );
    // }
}

interface Props {
    text: string[];
}

function ContentList({ text }: Props) {
    return (
        <div>
            {text.map((point, index) => {
                return <li key={index}>{point}</li>;
            })}
        </div>
    );
}

export default Personality;
