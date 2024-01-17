import * as React from 'react';

const ProgressBar = (props: { bgcolor: any; completed: any }) => {
    const { bgcolor, completed } = props;
    return (
        <div>
            <div>
                <span>{`${completed}%`}</span>
            </div>
        </div>
    );
};

export default ProgressBar;
