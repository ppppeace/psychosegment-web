import React from 'react';

function Result() {
    return (
        <div className='container'>
            <div className='ml-20 my-2 grid grid-cols-3 gap-8'>
                <div>
                    <h1 className='text-2xl rotate-topic ro font-semibold mt-6'>PsychoSegment Insight Hub</h1>
                    <div className='ml-24 mr-10 resultBox row-span-2'>
                        <div className='m-5'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Repellat aliquam deserunt harum rem earum assumenda perspiciatis expedita. Aliquid distinctio tenetur fugiat qui
                            recusandae obcaecati voluptates.
                        </div>
                    </div>
                    <div className='type font-semibold text-5xl text-[var(--red-primary)]'>
                        <h1>
                            The
                            <br /> Visionary
                        </h1>
                    </div>
                    {/* <div className='flex-line'>
                        <div className='line-page h-full'>s</div>
                    </div> */}
                </div>
                <div>
                    <div className='marketing text-xl text-white'>
                        <h5 className='m-5'>
                            Enthusiastically imaginative and endlessly curious, the vibrant personalities of ENTPs light up any room. With an
                            infectious zest for life, they are the spirited architects of innovation, weaving creativity into the fabric of every
                            idea. Their charming charisma is a beacon, drawing others into the captivating world of endless possibilities. Embrace the
                            journey with an ENTP and explore the boundless horizons of imagination and ingenuity!
                        </h5>
                    </div>
                    <div className='col-start-2 list-marketing text-xl text-white'>
                        <ul className='m-5 list-outside'>
                            <li>Innovative Insights: Capture the ENTPs imaginative spirit.</li>
                            <li>Groundbreaking Solutions: Showcase your offering as a trailblazing answer.</li>
                            <li>Fuel Discussion: Encourage conversations about its limitless applications and future possibilities.</li>
                        </ul>
                    </div>
                </div>
                <div className='type font-semibold text-7xl text-[var(--red-primary)]'>
                    <h1 className='m-5 text-center mt-40'>ENTP</h1>
                </div>
            </div>
        </div>
    );
}

export default Result;
