"use client"
import './InputData.scss';
import React,{ useCallback, useRef, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitSendData } from '../_action/submit';

import Percent from './Percent';
import Button from '../components/button/Button';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

type Props = {}

export default function InputData({}:Props) {
    // const ref = useRef<HTMLFormElement>(null);
    // const [state,formAction] = useFormState(submitSendData,{error:null});
    const [textSearch,setTextSearch] = useState("")
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    return (
        <div className='text-center color-bg-input'>
            <div className='box '>
                <h3 className='text-3xl pt-10 font-medium'>
                    Get To Know Yourself Better <br /> With MBTI Prediction
                </h3>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='m-4 col-start-3 col-span-2'>
                        <textarea
                            id='sentencs'
                            name='message'
                            onChange={e=> setTextSearch(e.target.value)}
                            rows={3}
                            className='block w-full rounded-3xl border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                            defaultValue={''}
                        />
                        <div className='mt-8'>
                            <Link
                                href= { "/analysis" + '?' + createQueryString('search',textSearch)}
                                className='text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
                            >
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            {/* <form
                ref={ref}
                action={async (formData : FormData)=>{
                ref.current?.reset();
                formAction(formData);
            }}>
                <div className='grid grid-cols-6 gap-4'>
                    <div className='m-4 col-start-3 col-span-2'>
                        <textarea
                            id='sentencs'
                            name='message'
                            rows={3}
                            className='block w-full rounded-3xl border-0 py-1.5 px-2 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
                            defaultValue={''}
                        />
                        <div className='mt-8'>
                            <button
                                type='submit'
                                className='text-base rounded-xl bg-[var(--button)] px-5 py-3 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 '
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
                </form> */}
                {/* <div className='center'>
                    <form action='/prediction.php'>
                        <input className='tx-16 fontadmina tx-box ' type='text' placeholder='Input long sentences...' />
                        <p className='pad-2-top'>
                            <Button>Submit</Button>
                        </p>
                    </form>
                </div> */}
            </div>
        </div>
    );
}

