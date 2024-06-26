import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './features/Welcome';
import InputData from './features/InputData';
import Percent from './features/Percent';
import Personality from './features/Personality';
import Footer from './components/footer/Footer';
import AnalysisPage from './analysis/page';

type Props = {};

const page = (props: Props) => {
    return (
        <div className='bg-[var(--alabaster)]'>
            <Navbar />
            <Welcome />
            <InputData />
            <Percent />
            <Personality />
            <Footer />
            {/* <AnalysisPage/> */}
        </div>
    );
};

export default page;
