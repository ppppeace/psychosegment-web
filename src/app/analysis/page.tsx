'use client';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
//import Result from '../features/Result';
import Fastapi from '../staticc/[item]/page';

type Props = {};

const AnalysisPage = ({}: Props) => {
    return (
        <div className='bg-[var(--alabaster)]'>
            <Navbar />
            {/* <Result /> */}
            <Footer />
        </div>
    );
};

export default AnalysisPage;
