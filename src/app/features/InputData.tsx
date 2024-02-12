import React from 'react';
import './InputData.scss';

import Percent from './Percent';
import Button from '../components/button/Button';
//import { userContext } from "react";

function InputData() {
    //const [context] = userContext("");
    //from-transparent
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
