import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Result from '../features/Result';

type Props = {};

const AnalysisPage = (props: Props) => {
    return (
        <div className='bg-[var(--alabaster)]'>
            <Navbar />
            <Result />
            <Footer />
        </div>
    );
};

export default AnalysisPage;
