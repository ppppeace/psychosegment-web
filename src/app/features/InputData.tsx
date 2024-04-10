'use client';

import './InputData.scss';
import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
type Props = {};

export default function InputData({}: Props) {
    // const ref = useRef<HTMLFormElement>(null);
    // const [state,formAction] = useFormState(submitSendData,{error:null});
    const [text, setText] = useState('');
    const charLimit = 120;
    const charMin = 80;
    const [textSearch, setTextSearch] = useState('');
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );
    return (
        <div className='text-center color-bg-input'>
            <div className='box '>
                <h3 className='text-3xl pt-10 font-medium'>
                    Get To Know Yourself Better <br /> With MBTI Prediction
                </h3>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='my-4 col-start-4 col-span-6 '>
                        <textarea
                            id='sentencs'
                        //     name='sentencs'
                        //     value={text}
                        //     onChange={(e) => setText(e.target.value)}
                        //     placeholder='Please input the some sentence...'
                        //     maxLength={charLimit}
                        //     minLength={charMin}
                        //     className='block w-full rounded-3xl border-0 py-4 px-6 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-base sm:leading-6 '
                        // />
                        // <div className='text-base text-end'>
                        //     {text.length}/{charLimit}
                        // </div>
                        // <div className='mt-4 submit shadow-sm  '>
                        //     <button
                        //         disabled={text.length < charMin}
                        //         type='submit'
                        //         className={text.length < charMin ? 'disabled' : 'enable'} //'text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                            name='message'
                            onChange={(e) => setTextSearch(e.target.value)}
                            rows={3}
                            placeholder='Please input the some sentence...'
                            maxLength={charLimit}
                            minLength={charMin}
                            className='block w-full rounded-3xl border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                            defaultValue={''}
                        />
                        <div className='mt-8'>
                            {/* <Link
                                href= { "/analysis" + '?' + createQueryString('search',textSearch)}
                                className='text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
>>>>>>> connectbackend
                            >
                                Submit
                            </Link> */}
                            <Link
                                href={'/staticc/' + textSearch}
                                className='text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
                            >
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
