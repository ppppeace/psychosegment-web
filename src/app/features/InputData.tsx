import React from 'react';
import './InputData.scss';
import Link from 'next/link'
// import { useRouter } from "next/navigation"
// import { useState } from "react"

import Percent from './Percent';
import Button from '../components/button/Button';

function InputData() {
    // const router = useRouter()

    // const [link,setLink] = useState('')
    // const [isLoading,setIsLoading] = useState(false)
    // return (
    //     <form className='w-1/2'>
    //         <label>
    //             <span>Title</span>
    //             <input
    //                 required
    //                 type='text'
    //                 onChange={(e)=>setLink(e.target.value)}
    //                 value={link} />
    //             <button 
    //                 className='btn-primary'
    //                 disabled={isLoading}
    //                 >
    //                     {isLoading && <span>Adding...</span>}
    //                     {!isLoading && <span>Add MBTI</span>}
    //                 </button>
    //         </label>
    //     </form>
    // )

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
                            name='sentencs'
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
                <Link href="/about">Go to about</Link>
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

export default InputData;
