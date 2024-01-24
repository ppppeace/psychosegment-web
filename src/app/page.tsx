// import express, {Application} from 'express';
// import bodyParser from 'body-parser';
// import * as dotenv from 'dotenv';
// import mbtiRoutes from './routes/mbtiRoutes'

// const app: Application = express()
// const PORT = Number(process.env.DB_PORT)

// dotenv.config({ path: process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : `.env` });

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// app.use(express.json())
// app.use('/',mbtiRoutes)
// app.use('/mbti', mbtiRoutes);

// app.use(express.json());
// app.listen(PORT, () => console.log(`server listening on port ${PORT} => http://localhost:${PORT}`));
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Welcome from './features/Welcome';
import InputData from './features/InputData';
import Percent from './features/Percent';
import Personality from './features/Personality';
import Footer from './components/footer/Footer';

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
        </div>
    );
};

export default page;