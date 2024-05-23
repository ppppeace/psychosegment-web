'use client';

import './InputData.scss';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import router, { useRouter } from 'next/router';
import Router from 'next/router';
type Props = {};

export default function InputData({}: Props) {
    //const [text, setText] = useState('');
    const textRef = useRef(null);
    const charLimit = 120;
    const charMin = 80;
    const [textSearch, setTextSearch] = useState('');
    var condition = false;
    if (textSearch.length >= charMin && textSearch.length <= charLimit) {
        condition = true;
    }
    const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setTextSearch(event.target.value);
    };

    // const pathname = usePathname();
    // const searchParams = useSearchParams();
    // const createQueryString = useCallback(
    //     (name: string, value: string) => {
    //         const params = new URLSearchParams(searchParams.toString());
    //         params.set(name, value);

    //         return params.toString();
    //     },
    //     [searchParams]
    // );
    return (
        <div className='text-center color-bg-input'>
            <div className='box '>
                <h3 className='pt-5 md:pt-8 lg:pt-10 text-base md:text-xl lg:text-3xl font-medium'>
                    Get To Know Yourself Better <br /> With MBTI Prediction
                </h3>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='my-4 col-start-4 col-span-6 '>
                        <textarea
                            id='sentencs'
                            name='message'
                            onChange={handleInputChange}
                            ///onChange={(e) => setTextSearch(e.target.value)}
                            rows={3}
                            placeholder='Please input the some sentence...'
                            maxLength={charLimit}
                            minLength={charMin}
                            className='block w-full rounded-3xl border-0 py-1.5 px-6 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset text-[8px] md:text-xs lg:text-base sm:leading-6'
                            defaultValue={''}
                        />
                        <div className='text-[8px] md:text-xs lg:text-base text-end'>
                            {textSearch.length}/{charLimit}
                        </div>

                        <div className='mt-3 md:mt-5 lg:mt-8'>
                            <div className='submit'>
                                {condition ? (
                                    <a href={'/staticc/' + textSearch} className='shadow enable'>
                                        Submit
                                    </a>
                                ) : (
                                    <a className='shadow disabled '>Submit</a>
                                )}
                            </div>
                            {/* <Link 

                                href={'/staticc/' + textSearch}
                                className='text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
                            >
                                Submit
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
