import * as React from 'react';

const PercentBar = ({ percent }: any) => {
    const result = percent - 50;
    return (
        <div>
            {/* <div className='text-white text-base'>+{result}%</div> */}
            <div className='percent-bar-container'>
                <div className='percent-bar' style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    );
};

export default PercentBar;
